import { Box, Button, Grid, styled } from "@mui/material";
import { useForm } from "react-hook-form";
import {
  useGetProviderGroupQuery,
  useGetProviderUnitQuery,
  useGetTimeZoneQuery,
  useGetStatesQuery,
  useGetCitiesQuery,
  useAddLabMutation,
} from "../store/api/api";

import { ILabAddForm } from "../utils/types";
import backArrow from "../assets/back-arrow.svg";

import FormWrapper from "../components/form/FormWrapper";
import FormLevelInput from "../components/form/FormLevelInput";
import FormLevelDropdown from "../components/form/FormLevelDropdown";

import type { RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { addTimeZoneMessage } from "../store/timezoneSlice";
import Input from "../components/levels/Input";

import Snackbar from "@mui/material/Snackbar";
import React from "react";

// Styled component
const StyledWrapper = styled(Box)({
  width: "100%",
  height: "100%",
});

const StyledHeader = styled(Box)({
  display: "flex",
  height: "56px",
  borderBottom: "1px solid #919EAB",
  alignItems: "center",
});

const StyledPageTitle = styled("p")({
  fontSize: "18px",
  fontWeight: 700,
  lineHeight: "28px",
  letterSpacing: "0px",
  textAlign: "left",
  color: "#253A64",
});

const StyledContentWrapper = styled("div")({
  border: "1px solid #ddd",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
  padding: "16px",
});

const StyledDetailsWrapper = styled("div")({
  width: "656px",
  // height: "450px",
  border: "1px solid #D3DAE4",
  borderRadius: "8px",
  overflow: "hidden",
});

const StyledFormWrapper = styled("div")({
  display: "flex",
  padding: "16px",
  flexDirection: "column",
  gap: "15px",
});

const StyledFormHeader = styled("div")({
  height: "32px",
  padding: "10px 16px 0px",
  backgroundColor: "#F9FAFB",
  fontSize: "12px",
  fontWeight: 700,
});

const StyledFooter = styled("div")({
  display: "flex",
  justifyContent: "center",
});

const StyledButton = styled(Button)({
  width: "130px",
  height: "40px",
  borderRadius: "8px",
  backgroundColor: "#84B94F",
  fontFamily: "Montserrat",
  fontSize: "14px",
  fontWeight: 700,
  lineHeight: "24px",
  letterSpacing: "0px",
  textAlign: "center",
  color: "#ffffff",
  "&:hover": {
    backgroundColor: "#84B94F",
  },
});

const AddLabComponent = () => {
  const [open, setSnakbarOpen] = React.useState(false);

  const timezoneMessage = useSelector(
    (state: RootState) => state.timezone.value
  );
  const dispatch = useDispatch();

  const methods = useForm<ILabAddForm>();
  const { handleSubmit } = methods;
  const [addLab] = useAddLabMutation();

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setSnakbarOpen(false);
  };

  // Form Submit
  const onSubmit = (formData: ILabAddForm) => {
    addLab(formData)
      .unwrap()
      .then((res) => {
        console.log(res);
        if (res) {
          setSnakbarOpen(true);
          dispatch(addTimeZoneMessage(formData.timezone));
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const { data: { providerGroupDropdown } = {} } = useGetProviderGroupQuery(1);
  const { data: { providerUnitDropdown } = {} } = useGetProviderUnitQuery(1);
  const { data: { timezoneDropdown } = {} } = useGetTimeZoneQuery(1);
  const { data: { stateDropdown } = {} } = useGetStatesQuery(1);
  const { data: { cityDropdown } = {} } = useGetCitiesQuery(1);

  return (
    <StyledWrapper>
      <StyledHeader>
        <img src={backArrow} alt="" />
        <StyledPageTitle>Add Lab</StyledPageTitle>
      </StyledHeader>
      <StyledContentWrapper>
        <FormWrapper
          methods={methods}
          id="add-lab-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <StyledDetailsWrapper>
            <StyledFormHeader>Details</StyledFormHeader>
            <StyledFormWrapper>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <FormLevelInput
                    name="labName"
                    label="Lab Name"
                    rules={{ required: "Lab Name is Required" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  {providerGroupDropdown && (
                    <FormLevelDropdown
                      name="providerGroup"
                      label="Provider Group"
                      rules={{ required: "Provider group is required " }}
                      dropDownItem={providerGroupDropdown || []}
                    />
                  )}
                </Grid>
                <Grid item xs={6}>
                  {providerUnitDropdown && (
                    <FormLevelDropdown
                      name="providerUnit"
                      label="Provider Unit"
                      rules={{ required: "Provider Unit is required " }}
                      dropDownItem={providerUnitDropdown || []}
                    />
                  )}
                </Grid>
                <Grid item xs={12}>
                  <FormLevelInput
                    name="address"
                    label="Address"
                    rules={{ required: "address is Required" }}
                  />
                </Grid>

                <Grid item xs={4}>
                  {stateDropdown && (
                    <FormLevelDropdown
                      name="state"
                      label="State"
                      rules={{ required: "State is required " }}
                      dropDownItem={stateDropdown || []}
                    />
                  )}
                </Grid>
                <Grid item xs={4}>
                  {cityDropdown && (
                    <FormLevelDropdown
                      name="city"
                      label="City"
                      rules={{ required: "City is required " }}
                      dropDownItem={cityDropdown || []}
                    />
                  )}
                </Grid>
                <Grid item xs={4}>
                  <FormLevelInput
                    name="zipCode"
                    label="Zip Code"
                    rules={{ required: "Zipcode is Required" }}
                  />
                </Grid>

                <Grid item xs={6}>
                  <FormLevelInput
                    name="officePhone"
                    label="Office Phone"
                    rules={{ required: "Office Phone is Required" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormLevelInput
                    name="mobile"
                    label="Mobile"
                    rules={{ required: "Mobile number is Required" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormLevelInput
                    name="email"
                    label="Email Id"
                    rules={{ required: "Email is Required" }}
                  />
                </Grid>
              </Grid>
            </StyledFormWrapper>
          </StyledDetailsWrapper>

          <StyledDetailsWrapper>
            <StyledFormHeader>Portal Time zone</StyledFormHeader>
            <StyledFormWrapper>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  {timezoneDropdown && (
                    <FormLevelDropdown
                      name="timezone"
                      label="Time Zone"
                      rules={{ required: "Timezone is required " }}
                      dropDownItem={timezoneDropdown || []}
                    />
                  )}
                </Grid>
                <Grid item xs={6}>
                  {!!timezoneMessage && (
                    <Input
                      label="Time Zone"
                      disabled={true}
                      value={timezoneMessage}
                    />
                  )}
                </Grid>
              </Grid>
            </StyledFormWrapper>
          </StyledDetailsWrapper>
        </FormWrapper>
      </StyledContentWrapper>
      <StyledFooter>
        <Box sx={{ width: "656px", height: "72px", padding: "16px 0px" }}>
          <StyledButton form="add-lab-form" type="submit">
            Register Lab
          </StyledButton>
        </Box>
      </StyledFooter>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message="Register Successfully!"
      />
    </StyledWrapper>
  );
};

export default AddLabComponent;
