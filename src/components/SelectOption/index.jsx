import { Option, ListItem } from './style';
import { useContext } from 'react';
import { customSelectContext } from '@context/customSelectContext';

function SelectOption({ children, value, id, ariaSelected, default: isDefault }) {
  const { selectOption } = useContext(customSelectContext)

  return (
    <ListItem
      onMouseDown={selectOption}
      data-value={value}
      id={id}
      aria-selected={ariaSelected}
      data-default={isDefault}
    >
      { children }
    </ListItem>
  );
}

export default SelectOption;
