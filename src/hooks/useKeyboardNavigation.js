import { KEY } from '@config/constants';
import { useNavigation } from './useNavigation';

export function useKeyboardNavigation({ setSelectState, ...selectState }, config, combobox) {
  const Actions = {
    OpenList: 0,
    Navigate: 1,
    SelectOption: 2,
    Close: 3,
  };
  const { onSelect, pageSize } = config;

  const navigation = useNavigation(setSelectState, selectState, pageSize);

  const { isOpen, selected, options } = selectState;

  function getActionFromKey(e, key) {
    switch(key) {
      case KEY.ENTER:
      case KEY.SPACE:
        return isOpen ? Actions.SelectOption : Actions.OpenList;
      case KEY.ARROW_DOWN:
      case KEY.ARROW_UP:
        if (isOpen) {
          return e.altKey ? Actions.SelectOption : Actions.Navigate;
        }

        return Actions.OpenList;
      case KEY.PAGE_UP:
      case KEY.PAGE_DOWN:
      case KEY.HOME:
      case KEY.END:
        return Actions.Navigate;
      case KEY.TAB: {
        return isOpen ? Actions.SelectOption : -1;
      }
      case KEY.ESCAPE: {
        return Actions.Close;
      }
      default: {
        return -1;
      }
    }
  }

  function selectOption(optionIndex) {
    const { props: { id, children, value } } = options[optionIndex];
    if (selected.id === id) return selected;

    // const target = document.querySelector(`#${id}`);
    // const { dataset: { value } } = target;

    let selectedOption = { id, children, value };
    // if (selected.id !== id) {
      onSelect(selectedOption, setSelectState);
    // }

    return selectedOption;
  }

  function closeSelect(e, selectedOption) {
    e.preventDefault();
    
    combobox.current.focus();
    
    const newSelectState = {
      ...selectState,
      isOpen: false,
      activeOption: '',
    }

    if (selectedOption) {
      newSelectState.selected = selectedOption;
    }

    setSelectState(newSelectState);
  }

  function toggleOptionsList() {
    setSelectState({
      ...selectState,
      isOpen: !selectState.isOpen,
      activeOption: selected.id || ''
    });
  }

  function handleKeyboard(e) {
    const { code } = e
    const action = getActionFromKey(e, code);
    
    let selectedOption = selected;

    switch(action) {
      case Actions.OpenList: {
        toggleOptionsList();
        break;
      }
      case Actions.Navigate: {
        navigation
          .setActiveIndex(code)
          .navigate();
        break;
      }
      case Actions.SelectOption:
        if (navigation.activeIndex !== -1) {
          selectedOption = selectOption(navigation.activeIndex);
        }
      // eslint-disable-next-line no-fallthrough
      case Actions.Close:
        return closeSelect(e, selectedOption);
      default: 
        return true;
    }

    e.preventDefault();
  }

  return { toggleOptionsList, handleKeyboard };
}
