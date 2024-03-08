import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { DropdownTypes, IRules } from "../../utils/types";
import {
  FormHelperText,
  MenuItem,
  Select,
  SelectProps,
  styled,
} from "@mui/material";


type IProps = Omit<SelectProps, "variant"> & {
  error?: boolean;
  rules?: IRules;
  label?: string;
  dropDownItem: Array<DropdownTypes | null>;
  defaultValue?: string;
};

type ISelectLabelType = {
  error?: boolean;
};

const StyledSelectLabel = styled("span")<ISelectLabelType>(({ error }) => ({
  color: error ? "#C02195" : "#636F82",
  display: "flex",
  fontSize: "12px",
  fontWeight: 400,
  lineHeight: "15px",
  letterSpacing: "0px",
  textAlign: "left",
}));

const StyledSelect = styled(Select)(() => ({
  '& .MuiOutlinedInput-input': {
    padding: '4px 5px 5px'
  }
}));

const StyledFormHelperText = styled(FormHelperText)(() => ({
  color: "#C02195 !important",
  marginLeft: "0px",
  marginRight: "14px",
}));

const Dropdown = ({
  error,
  dropDownItem,
  label,
  defaultValue,
  ...extraProps
}: IProps) => {
  return (
    <div>
      <StyledSelectLabel error={error}>{label}</StyledSelectLabel>
      <StyledSelect
        fullWidth
        defaultValue={(dropDownItem.length > 0 && defaultValue) || ""}
        IconComponent={KeyboardArrowDownOutlinedIcon}
        {...extraProps}
        error={error}
      >
        {dropDownItem &&
          dropDownItem.length > 0 &&
          dropDownItem.map((el) => (
            <MenuItem key={el?.keyValue} value={el?.keyValue}>
              {el?.keyName}
            </MenuItem>
          ))}
      </StyledSelect>
      {error && (
        <div>
          <StyledFormHelperText error={error}>
            {extraProps?.rules?.required}
          </StyledFormHelperText>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
