import React from "react";
import styles from "./Input.module.css";

const Input = ({
  type,
  label,
  name,
  icon,
  onBlur,
  error,
  value,
  handleChange,
  placeholder,
}) => {
  return (
    <>
      <label className={styles.label} htmlFor={name}>
        {label}
        <img src={icon} alt="" />
      </label>
      <input
        type={type}
        name={name}
        className={styles.input}
        onChange={handleChange}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
      />
      {error && <p className={styles.error}>{error}</p>}
    </>
  );
};

export default Input;
