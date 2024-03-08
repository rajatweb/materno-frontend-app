import { styled } from "@mui/material";
import React from "react";
import { FormProvider } from "react-hook-form";

interface IProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  methods: any;
  children: React.ReactNode;
  id?: string;
  onSubmit?: () => void;
}

const StyledForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "15px",
});

const FormWrapper = ({ methods, children, ...extraProps }: IProps) => {
  return (
    <FormProvider {...methods}>
      <StyledForm {...extraProps}>{children}</StyledForm>
    </FormProvider>
  );
};

export default FormWrapper;
