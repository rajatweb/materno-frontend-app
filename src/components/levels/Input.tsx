import {
  FormHelperText,
  TextField,
  TextFieldProps,
  styled,
} from "@mui/material";

import { IRules } from "../../utils/types";

type IProps = TextFieldProps & {
  error?: boolean;
  rules?: IRules;
};


const StyledTextFieldLabel = styled("span")<IProps>(({ error }) => ({
  color: error ? "#C02195" : "#636F82",
  display: "flex",
  fontSize: "12px",
  fontWeight: 400,
  lineHeight: "15px",
  letterSpacing: "0px",
  textAlign: "left",
}));

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-input': {
    padding: '4px 5px 5px'
  }
});

const StyledFormHelperText = styled(FormHelperText)(() => ({
  color: "#C02195 !important",
}));

const Input = ({ error, label, ...extraProps }: IProps) => {
  return (
    <div>
      <StyledTextFieldLabel error={error}>{label}</StyledTextFieldLabel>
      <StyledTextField
        fullWidth
        size="small"
        variant="outlined"
        {...extraProps}
      ></StyledTextField>

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

export default Input;
