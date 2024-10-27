interface CommonFormProps {
  label?: string;
  required?: false;
  name: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  value?: string | number;
}

export {CommonFormProps};
