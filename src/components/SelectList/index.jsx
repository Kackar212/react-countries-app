import { List } from './style';

function SelectList({ isOpen = true, options = null, labelId }) {
  return (
    <List
      isOpen={isOpen}
      role="listbox"
      aria-labelledby={labelId}
    >
      {options}
    </List>
  );
}

export default SelectList;
