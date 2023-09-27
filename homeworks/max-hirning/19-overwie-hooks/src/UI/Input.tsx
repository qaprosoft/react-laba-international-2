import * as React from "react";
import styles from "../styles/UI/Input.module.css";

interface IProps {
  value: string;
  readonly?: boolean;
  customStyles: object;
  placeholder?: string;
  changeValue: (value: string) => void
}

export default function InputUI({ customStyles, readonly, value, changeValue, placeholder=""}: IProps) {
  const inputRef = React.useRef<any>(null);

  React.useEffect(() => {
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
      readOnly={readonly}
      className={styles.input}
      placeholder={placeholder}
      style={{...customStyles}}
      onChange={(e) => changeValue(e.target.value)}
    />
  )
}