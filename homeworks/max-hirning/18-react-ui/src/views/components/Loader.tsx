import { ReactElement } from "react";
import styles from "../../styles/components/Loader.module.css";

interface IProps {
  error: boolean;
  loading: boolean;
  children: ReactElement;
}

export function Loader({loading, error, children}: IProps) {
  if(loading) {
    return (
      <>
        {children}
        <h1 className={styles.msg}>Loading...</h1>
      </>
    )
  }
  if(error) return <h1 className={styles.msg}>Network Error</h1>
  return children;
}