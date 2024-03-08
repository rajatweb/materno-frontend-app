
import { SelectChangeEvent } from "@mui/material";
import {
  Controller,
  UseControllerProps,
  useFormContext,
} from "react-hook-form";
import { DropdownTypes } from "../../utils/types";
import Dropdown from "../levels/Dropdown";
import { IRules } from "../../utils/types";

interface IProps {
  name: string;
  label: string;
  onChange?: (value: SelectChangeEvent<unknown>) => void;
  disabled?: boolean;
  rules?: IRules;
  dropDownItem: Array<DropdownTypes | null>;
}

const FormLevelDropdown = ({
  name,
  label,
  onChange,
  dropDownItem,
  defaultValue = "",
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
        <Dropdown
          inputProps={{ ...field }}
          onChange={onChange}
          error={!!errors[name]}
          label={label}
          dropDownItem={dropDownItem}
          {...extraProps}
        />
      )}
    />
  );
};

export default FormLevelDropdown;
