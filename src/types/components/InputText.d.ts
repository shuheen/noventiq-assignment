import { CommonFormProps } from './../common';

export interface InputTextProps
  extends Pick<
    CommonFormProps,
    'label' | 'name' | 'required' | 'onChange' | 'value' | 'placeholder'
  > {
  type?: 'text' | 'password' | 'email';
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  error?: string;
}
