import * as React from "react";
import styles from "../styles/UI/Input.module.css";

interface IProps {
  value: string;
  readonly?: boolean;
  onClick?: () => void;
  placeholder?: string;
  customStyles?: object;
  changeValue: (value: string) => void
  inputRef: React.RefObject<HTMLInputElement>;
}

export default function InputUI({ inputRef, onClick, customStyles, readonly, value, changeValue, placeholder=""}: IProps) {
  return (
    <input
      value={value}
      ref={inputRef}
      onClick={onClick}
      readOnly={readonly}
      className={styles.input}
      placeholder={placeholder}
      style={{...customStyles}}
      onChange={(e) => changeValue(e.target.value)}
    />
  )
}