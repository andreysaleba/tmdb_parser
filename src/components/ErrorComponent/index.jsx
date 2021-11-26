import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';

const useStyle = makeStyles(() => ({
  wrapper: {
    height: '80vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export const ErrorComponent = () => {
  const style = useStyle();
  return (
    <div className={style.wrapper}>
      <Typography variant="h2" component="h2">
        Ooops... Smth went wrog. <br /> Try again later...
      </Typography>
    </div>
  );
};
