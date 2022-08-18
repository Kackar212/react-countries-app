import { useSelect } from '@hooks/useSelect';
import { createContext } from 'react';

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

function CustomSelectProvider({ children, options, onSelect, config: { shouldReset, pageSize }}) {
  return (
    <customSelectContext.Provider value={useSelect(options, onSelect, { shouldReset, pageSize })}>
      {children}
    </customSelectContext.Provider>
  )
}

export { customSelectContext, CustomSelectProvider };
