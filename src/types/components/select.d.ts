import {CommonFormProps} from './../common';

interface SelectProps extends Pick<CommonFormProps, 'label' | 'name' | 'required' | 'onChange' | 'placeholder'> {
  options: SelectOption[];
  selected: string;
}

interface SelectOption {
  label: string;
  value: string;
}

export {SelectProps, SelectOption};
