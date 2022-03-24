import PropTypes from 'prop-types';
import { List } from './style';

function SelectList({ isOpen = true, options = null, labelId }) {
  return (
    <List isOpen={isOpen} role="listbox" aria-labelledby={labelId}>
      {options}
    </List>
  );
}

SelectList.propTypes = {
  isOpen: PropTypes.bool,
  options: PropTypes.node,
  labelId: PropTypes.string.isRequired,
};

export default SelectList;
