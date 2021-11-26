import React from 'react';
import { makeStyles } from '@mui/styles';
import CircularProgress from '@mui/material/CircularProgress';

const useStyle = makeStyles((theme) => ({
  wrapper: {
    height: '80vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export const Loader = () => {
  const style = useStyle();

  return (
    <div className={style.wrapper}>
      <CircularProgress color="inherit" />
    </div>
  );
};
