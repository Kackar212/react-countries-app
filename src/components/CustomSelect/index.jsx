import CustomSelectField from '@components/CustomSelectField';
import { CustomSelectProvider } from '@context/customSelectContext';

function CustomSelect({ children, onSelect, label, labelId, shouldReset, pageSize, ...attrs }) {
  return (
    <CustomSelectProvider
      config={{ shouldReset, pageSize }}
      options={children}
      onSelect={onSelect}
    >
      <CustomSelectField label={label} labelId={labelId} attrs={attrs}/>
    </CustomSelectProvider>
  );
}

export default CustomSelect;
