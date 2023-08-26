import { Radio } from "@material-tailwind/react";
import { ChangeEventHandler } from "react";

export { Option, type OptionProps }

interface OptionProps {
  name: string;
  value: string;
  text: string;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

function Option({ name, value, text, checked, onChange }: OptionProps): React.JSX.Element {
  return (
    <Radio
      name={name}
      label={text}
      value={value}
      checked={checked}
      onChange={onChange}
      color='purple'
      crossOrigin='*'
    />
  );
};
