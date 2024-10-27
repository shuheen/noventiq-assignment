import { SelectOption, SelectProps } from '../../types/components/select';

const Select = ({
  name,
  onChange,
  label,
  options,
  placeholder,
  selected,
}: SelectProps) => {
  return (
    <div className="flex gap-3 items-start justify-between flex-col sm:flex-row sm:items-center sm:justify-between">
      <label htmlFor={name} className="font-bold text-md min-w-[120px]">
        {label}
      </label>
      <select
        id={name}
        onChange={(event) => onChange && onChange(event.target.value)}
        value={selected}
        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full px-2 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option defaultValue="">{placeholder || 'Select'}</option>
        {options.map((option: SelectOption) => {
          const { value, label } = option;
          return (
            <option key={label.toLowerCase().replace(/ /g, '-')} value={value}>
              {label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
