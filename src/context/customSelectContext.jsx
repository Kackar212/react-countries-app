import SelectOption from '@components/SelectOption';
import { useSelect } from '@hooks/useSelect';
import { createContext } from 'react';
import PropTypes from 'prop-types';

const customSelectContext = createContext({
  selectOption: () => {},
  selectState: {},
  toggleOptionsList: () => {},
  clearSelect: () => {},
  closeSelect: () => {},
  comboboxOnClick: () => {},
  handleKeyboard: () => {},
  getSelectedOptionChildren: () => {},
});

function CustomSelectProvider({
  children,
  options,
  onSelect,
  config: { shouldReset, pageSize },
}) {
  const select = useSelect(options, onSelect, { shouldReset, pageSize });

  return (
    <customSelectContext.Provider value={select}>
      {children}
    </customSelectContext.Provider>
  );
}

CustomSelectProvider.propTypes = {
  children: PropTypes.node,
  options: PropTypes.arrayOf(SelectOption),
  onSelect: PropTypes.func,
  config: PropTypes.object,
};

export { customSelectContext, CustomSelectProvider };
