import {
  Controller,
  UseControllerProps,
  useFormContext,
} from "react-hook-form";
import Input from "../levels/Input";
import { IRules } from "../../utils/types";

interface IProps {
  name: string;
  defaultValue?: string;
  label: string;
  disabled?: boolean;
  rules?: IRules;
}

const FormLevelInput = ({
  name,
  defaultValue = "",
  label,
  disabled,
  ...extraProps
}: IProps & UseControllerProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      {...extraProps}
      render={({ field }) => (
        <Input
          inputProps={{ ...field }}
          error={!!errors[name]}
          label={label}
          InputProps={{
            readOnly: disabled ? true : false,
          }}
          {...extraProps}
        />
      )}
    />
  );
};

export default FormLevelInput;
