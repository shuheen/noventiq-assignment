import { BaseSyntheticEvent } from 'react';
import { CommonFormProps } from './../common';

interface SwitchProps extends Pick<CommonFormProps, 'label' | 'name'> {
  checked?: boolean;
  onChange?: (event: BaseSyntheticEvent) => void;
}

export { SwitchProps };
