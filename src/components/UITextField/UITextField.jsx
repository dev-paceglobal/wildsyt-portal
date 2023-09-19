import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FormHelperText, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  UIStyledOutlinedField,
  UIStyledStandardField,
  UIStyledNewsLetterField,
} from "./ui";

const UITextField = ({
  name,
  type,
  label,
  value,
  control,
  variant,
  errorMessage,
  handleChange,
  isOtp,
  isNewsLetter,
  ...rest
}) => {
  const { control: fallbackControl } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((prev) => !prev);
  return variant == "outlined" && type !== "password" ? (
    <>
      <Controller
        name={name}
        control={control == null ? fallbackControl : control}
        render={({ field }) => (
          <>
            <UIStyledOutlinedField
              type={type}
              variant="outlined"
              label={label}
              value={value}
              onChange={handleChange}
              error={errorMessage && true}
              // InputLabelProps={{ shrink: true }}

              {...rest}
              {...field}
            />
          </>
        )}
      />
      {errorMessage && (
        <FormHelperText sx={{ color: "red" }}>{errorMessage}</FormHelperText>
      )}
    </>
  ) : variant == "outlined" && type === "password" ? (
    <>
      <Controller
        name={name}
        error={errorMessage && true}
        control={control == null ? fallbackControl : control}
        render={({ field }) => (
          <>
            <UIStyledOutlinedField
              type={showPassword ? "text" : "password"}
              variant="outlined"
              error={errorMessage && true}
              label={label}
              value={value}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      sx={{ padding: "10px !important" }}
                    >
                      {!showPassword ? (
                        <VisibilityOff
                          sx={{ color: (theme) => theme.palette.primary.grey6 }}
                        />
                      ) : (
                        <Visibility
                          sx={{ color: (theme) => theme.palette.primary.grey6 }}
                        />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              {...field}
              {...rest}
            />
          </>
        )}
      />
      {errorMessage && (
        <FormHelperText sx={{ color: "red" }}>{errorMessage}</FormHelperText>
      )}
    </>
  ) : type == "password" ? (
    <>
      <Controller
        name={name}
        error={errorMessage && true}
        control={control == null ? fallbackControl : control}
        render={({ field }) => (
          <>
            <UIStyledOutlinedField
              type={showPassword ? "text" : "password"}
              variant={variant}
              error={errorMessage && true}
              helperText={errorMessage}
              label={label}
              value={value}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword}>
                      {showPassword ? (
                        <VisibilityOff
                          sx={(theme) => ({
                            color: theme.palette.primary.main,
                          })}
                        />
                      ) : (
                        <Visibility
                          sx={(theme) => ({
                            color: theme.palette.primary.main,
                          })}
                        />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              {...field}
              {...rest}
            />
          </>
        )}
      />
      {errorMessage && (
        <FormHelperText sx={{ color: "red" }}>{errorMessage}</FormHelperText>
      )}
    </>
  ) : isNewsLetter ? (
    <UIStyledNewsLetterField
      type={type}
      variant="outlined"
      label={label}
      value={value}
      onChange={handleChange}
      error={errorMessage && true}

      {...rest}
      // {...field}
    />
  ) : (
    <>
      <UIStyledOutlinedField
        type={type}
        variant="outlined"
        label={label}
        value={value}
        onChange={handleChange}
        error={errorMessage && true}
        {...rest}
      />
      {errorMessage && (
        <FormHelperText sx={{ color: "red" }}>{errorMessage}</FormHelperText>
      )}
    </>
  );
};

export default UITextField;
