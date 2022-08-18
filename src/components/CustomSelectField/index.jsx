import SelectList from '@components/SelectList';
import { customSelectContext } from '@context/customSelectContext';
import { slugify } from '@utilities/string';
import { useContext } from 'react';
import { SelectLabel, SelectButton, SelectContainer, SelectField } from './style';
import { ReactComponent as Chevron } from "@assets/chevron.svg";
import { SelectOverlay } from './style';

function CustomSelectField({ attrs, label, labelId }) {
  const { selectState, comboboxOnClick, handleKeyboard, closeSelect, getSelectedOptionChildren, combobox } = useContext(customSelectContext);
  const { selected, options, isOpen, activeOption } = selectState
  const id = labelId || slugify(label);

  return (
    <SelectField { ...attrs }>
      <SelectOverlay isOpen={isOpen} onClick={closeSelect}/>
      <SelectContainer>
        <SelectLabel selected={selected} id={id}>
          {typeof label === 'function' ? label() : label}
        </SelectLabel>
        <SelectButton
          ref={combobox}
          aria-expanded={isOpen}
          aria-labelledby={id}
          onClick={comboboxOnClick}
          onKeyDown={handleKeyboard}
          aria-activedescendant={activeOption}
          value={selected.value}
        >
          <div id={`${id}-selected-option`}>
            { getSelectedOptionChildren() }
          </div>
          <Chevron aria-hidden="true"/>
        </SelectButton>
        <SelectList
          selected={selected}
          options={options}
          isOpen={isOpen}
          labelId={id}
        />
      </SelectContainer>
    </SelectField>
  )
}

export default CustomSelectField;
