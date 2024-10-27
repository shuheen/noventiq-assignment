import {InputTextProps} from '../../types/components/InputText';

const InputText = ({
  label,
  type,
  required,
  name,
  onChange,
  startIcon,
  endIcon,
  value,
  placeholder,
  error,
}: InputTextProps) => {
  return (
    <div className="flex flex-col gap-3 items-start justify-between sm:flex-row sm:items-center sm:justify-between">
      <label htmlFor={name} className="font-bold text-md min-w-full sm:min-w-[120px]">
        {label}
      </label>
      <div className="flex flex-col flex-1 w-full items-start">
        <div
          className={`flex gap-2 bg-white border border-gray-300 rounded-md items-center  ${
            endIcon ? 'justify-between' : 'justify-start'
          } px-2 w-full ${error && 'border-red-300 border-2'}`}
        >
          {startIcon!}
          <input
            className="text-black text-md flex-1 py-2 outline-none bg-white max-w-[65%] sm:max-w-[75%] md:max-w-[80%]"
            type={type}
            value={value}
            required={required}
            name={name}
            onChange={(event) => onChange && onChange(event.target.value)}
            placeholder={placeholder}
          />
          {endIcon!}
        </div>
        {error && <span className="text-sm text-red-500 font-medium">{error}</span>}
      </div>
    </div>
  );
};

export default InputText;
