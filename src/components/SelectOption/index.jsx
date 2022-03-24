import PropTypes from 'prop-types';
import { ListItem } from './style';
import { useContext } from 'react';
import { customSelectContext } from '@context/customSelectContext';

function SelectOption({
  children,
  value,
  id,
  ariaSelected,
  default: isDefault,
}) {
  const { selectOption } = useContext(customSelectContext);

  return (
    <ListItem
      onMouseDown={selectOption}
      data-value={value}
      id={id}
      aria-selected={ariaSelected}
      data-default={isDefault}
    >
      {children}
    </ListItem>
  );
}

SelectOption.propTypes = {
  children: PropTypes.node,
  value: PropTypes.string,
  id: PropTypes.string,
  ariaSelected: PropTypes.bool,
  default: PropTypes.bool,
};

export default SelectOption;
