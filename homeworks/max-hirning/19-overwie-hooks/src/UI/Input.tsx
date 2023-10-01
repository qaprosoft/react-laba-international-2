import { useRef, useEffect } from "react";
import styles from "../styles/UI/Input.module.css";

interface IProps {
  value: string;
  readonly?: boolean;
  onClick?: () => void;
  placeholder?: string;
  customStyles?: object;
  changeValue: (value: string) => void
}

export default function InputUI({ onClick, customStyles, readonly, value, changeValue, placeholder=""}: IProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if(inputRef.current) {
      if(!readonly) {
        inputRef.current.focus();
      } else {
        inputRef.current.blur();
      }
    }
  }, [readonly]);

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