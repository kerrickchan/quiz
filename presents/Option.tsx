import { IOption } from "@/models";
import { Radio } from "@material-tailwind/react";
import { ChangeEventHandler } from "react";

export { Option, type OptionProps }

interface OptionProps extends Omit<IOption, 'question' | 'order'> {
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

function Option({ name, value, text, onChange }: OptionProps): React.JSX.Element {
  return (
    <Radio
      name={name}
      label={text}
      value={value}
      onChange={onChange}
      color='purple'
      crossOrigin='*'
    />
  );
};
