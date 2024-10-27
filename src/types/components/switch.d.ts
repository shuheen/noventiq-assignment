import {CommonFormProps} from './../common';

interface SwitchProps extends Pick<CommonFormProps, 'label' | 'name'> {
  checked?: boolean;
}

export {SwitchProps};
