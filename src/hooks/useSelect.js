import { SrOnly } from '@components/CustomSelectField/style';
import { slugify } from '@utilities/string';
import { Children, cloneElement, useEffect, useState, useRef } from 'react';
import { useKeyboardNavigation } from './useKeyboardNavigation';

export function useSelect(
  children,
  onSelect = () => {},
  selectOptions,
) {
  const combobox = useRef();

  const childrenAsArray = Children.toArray(children);
  let defaultOption = childrenAsArray.find(({ props }) => props.default);
  if (!defaultOption) {
    defaultOption = childrenAsArray.find(({ props }) => props.value === '') || {
      props: { children: null }
    };
  }

  let defaultSelected = useRef({ target: null, id: undefined, ...defaultOption.props });
  const [selectState, setSelectState] = useState({
    options: childrenAsArray,
    selected: defaultSelected,
    isOpen: false,
    activeOption: ''
  });
  const { selected, options, activeOption } = selectState;

  useEffect(() => {
    if (selected.id === undefined) {
      const id = defaultOption.props.id || generateId();
      const index = selectState.options.indexOf(defaultOption);
      selectState.options[index] = cloneElement(defaultOption, { id });
      const { props: { value = '' } } = selectState.options[index];

      defaultSelected.current = { target: null, id, value, isDefault: true, children: defaultOption.props.children };

      setSelectState(selectState => ({
        ...selectState,
        selected: { ...defaultSelected.current },
      }));

      if (defaultSelected.current.value) onSelect(defaultSelected.current, setSelectState);
    } else {
      setSelectState(selectState => ({
        ...selectState,
        options: selectState.options.map(renderOption)
      }));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  useEffect(() => {
    if (selectOptions.shouldReset) {
      clearSelect();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectOptions.shouldReset]);

  const { handleKeyboard, toggleOptionsList } = useKeyboardNavigation(
    { ...selectState, setSelectState },
    { onSelect, pageSize: selectOptions.pageSize || 10 },
    combobox
  );

  function selectOption(e) {
    e.preventDefault();
    if (e.target?.tagName !== 'LI') return;
    
    combobox.current.focus();

    const { target } = e;
    const {
      dataset: { value }
    } = target;

    const {
      props: { children, id }
    } = options.find((option) => {
      return option.props.id === target.id;
    });
    const selectedOption = { target, id, children, value };

    if (selected.id !== selectedOption.id) {
      onSelect(selectedOption, setSelectState);
    };

    setSelectState({
      ...selectState,
      selected: selectedOption,
      activeOption: '',
      isOpen: false,
    });
  }

  function getSelectedOptionChildren(label) {
    if (selected.value === '') {
      return <SrOnly>{ selected.children }</SrOnly>
    }

    return selected.children && !label ? selected.children : <SrOnly>Select option</SrOnly>;
  }

  function comboboxOnClick(e) {
    e.preventDefault();

    toggleOptionsList();
  }

  function clearSelect() {
    const newSelectState = {
      ...selectState,
      selected: { ...defaultSelected.current },
      activeOption: '',
    };

    setSelectState(newSelectState);
  }

  function generateId() {
    const randomNumbers = crypto.getRandomValues(new Uint32Array(2)).toString();
    return `x${randomNumbers.replace(',', '')}`;
  }

  function renderOption(option) {
    const {
      props: { value, children, id, parse = true }
    } = option;

    const props = {};

    props.ariaSelected = selected.id === id;

    props.id = id || generateId();
    props.default = option.props.default || undefined;

    if (value === undefined && typeof children === 'string') {
      props.value = parse ? slugify(children.toLowerCase()) : children;
    }

    return cloneElement(option, props);
  }

  function closeSelect(e) {
    const searchedId = activeOption ? activeOption : selected.id;
    const selectedOption = options.find(({ props: { id }}) => searchedId === id)?.props || selected;

    if (selected.id !== selectedOption.id && selectedOption.id) {
      onSelect(selectedOption, setSelectState);
    }

    setSelectState({ ...selectState, selected: selectedOption, isOpen: false, activeOption: '' });
  }

  return {
    selectOption,
    selectState,
    toggleOptionsList,
    clearSelect,
    closeSelect,
    comboboxOnClick,
    handleKeyboard,
    getSelectedOptionChildren,
    combobox,
  };
}
