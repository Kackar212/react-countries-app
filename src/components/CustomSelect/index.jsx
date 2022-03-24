import CustomSelectField from '@components/CustomSelectField';
import SelectOption from '@components/SelectOption';
import { CustomSelectProvider } from '@context/customSelectContext';
import PropTypes from 'prop-types';

function CustomSelect({
  children,
  onSelect,
  label,
  labelId,
  shouldReset,
  pageSize,
  ...attrs
}) {
  return (
    <CustomSelectProvider
      config={{ shouldReset, pageSize }}
      options={children}
      onSelect={onSelect}
    >
      <CustomSelectField label={label} labelId={labelId} attrs={attrs} />
    </CustomSelectProvider>
  );
}

CustomSelect.propTypes = {
  children: PropTypes.arrayOf(SelectOption),
  onSelect: PropTypes.func,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  labelId: PropTypes.string,
  shouldReset: PropTypes.bool,
  pageSize: PropTypes.number,
  attrs: PropTypes.object,
};

export default CustomSelect;
