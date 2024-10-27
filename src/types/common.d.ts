interface CommonFormProps {
  label?: string;
  required?: boolean;
  name: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  value?: string | number;
}

export {CommonFormProps};
