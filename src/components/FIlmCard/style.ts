import { makeStyles } from '@mui/styles';

export const useStyle = makeStyles(() => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    width: 270,
    '& .MuiCardContent-root': {
      flex: 1,
    },
  },
  mediaWrapper: {
    width: '100%',
    height: '380px',
    position: 'relative',
    '& .MuiCardMedia-root': {
      height: '100%',
      width: '100%',
      objectFit: 'cover',
    },
  },
  placeholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#dbdbdb',
    backgroundSize: '50%',
    boxSizing: 'border-box',
    backgroundImage: `url('https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  wrapperRaitCircleProgress: {
    position: 'absolute',
    top: 350,
    right: 10,
    borderRadius: '50%',
    backgroundColor: '#14171a',
    width: 40,
    height: 40,
  },
  raitCircleProgress: {
    position: 'relative',
    display: 'flex',
    width: 40,
    height: 40,
    '& .MuiCircularProgress-root': {
      position: 'absolute',
    },
    '& .MuiCircularProgress-root:first-child': {
      zIndex: 1,
    },
    '& .MuiTypography-root': {
      display: 'flex',
      alignItems: 'center',
      width: 40,
      height: 40,
      justifyContent: 'center',
      color: '#fff',
      fontWeight: 'bold',
    },
  },
}));
