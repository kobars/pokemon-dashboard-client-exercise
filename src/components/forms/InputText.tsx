import { ChangeEvent } from "react";

interface InputTextProps {
  type: string;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  required?: boolean;
}

const InputText = (props: InputTextProps) => {
  const {
    type,
    onChange,
    placeholder = "Please input text here",
    value,
    required = false,
  } = props;

  return (
    <input
      className="block input w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      required={required}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default InputText;
