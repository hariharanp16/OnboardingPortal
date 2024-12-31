import React from "react";

const InputField = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder = "",
  required = false,
  error,
  helperText,
  disabled = false,
  maxLength,
  inputClass,
  containerClass,
  ...rest
}) => {
  return (
    <div className={`login-form-wrapper ${containerClass}`}>
      {label && <label className="form-label">{label}</label>}
      <input
        className="form-control"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        maxLength={maxLength}
        inputClass={inputClass}
        {...rest}
      />
      {helperText && <small>{helperText}</small>}
      {error && <small className="error">{error}</small>}
    </div>
  );
};

export default InputField;
