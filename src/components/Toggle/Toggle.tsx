import { ToggleProps } from '../../types/components/switch';

const Toggle = ({ label, checked, name, onChange }: ToggleProps) => {
  return (
    <div className="flex gap-3">
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          className="sr-only peer"
          onChange={onChange}
        />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sky-300 dark:peer-focus:ring-sky-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-sky-700"></div>
        <span className="ms-3 text-xs font-medium text-gray-900 dark:text-gray-300">
          {label}
        </span>
      </label>
    </div>
  );
};

export default Toggle;
