import Snackbar from '@mui/material/Snackbar';
import {forwardRef} from 'react';
import MuiAlert, {AlertProps} from '@mui/material/Alert';
import {PropsType} from './types';

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const MuiSnackbar = ({message, handleSnackClose}: PropsType) => {
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    handleSnackClose();
  };

  return (
    <Snackbar
      open={!!message}
      autoHideDuration={6000}
      onClose={handleSnackClose}
    >
      <Alert severity="error" onClose={handleClose}>
        {message}
      </Alert>
    </Snackbar>
  );
};
