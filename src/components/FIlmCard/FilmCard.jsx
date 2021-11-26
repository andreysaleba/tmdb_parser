import React from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { addToFavoriteList, removeFromFavoriteList } from '../../effects/favorite/favoriteSlice';
import { useStyle } from './style';

const Component = ({ title, rait, year, id, src, isFavorite }) => {
  const dispatch = useDispatch();
  const styles = useStyle();

  const changeStatusFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavoriteList(id));
    } else {
      dispatch(addToFavoriteList(id));
    }
  };

  const handleOpenNewTab = () => {
    const link = `https://www.themoviedb.org/movie/${id}`;
    window.open(link, '_blank');
  };

  const getRaitColor = () => {
    if (rait * 10 >= 70) return 'success';
    if (rait * 10 > 50 && rait * 10 < 70) return 'warning';
    return 'bad';
  };

  return (
    <Card className={styles.wrapper}>
      <CardActionArea className={styles.mediaWrapper} onClick={handleOpenNewTab}>
        {src ? (
          <CardMedia
            component="img"
            height="140"
            image={`https://www.themoviedb.org/t/p/w220_and_h330_face/${src}`}
            alt={title}
          />
        ) : (
          <div className={styles.placeholder} />
        )}
      </CardActionArea>
      <CardContent className={styles.content}>
        <Typography variant="h5" component="h5">
          {title}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between', paddingX: 2, color: 'rgba(0,0,0,0.6)' }}>
        <Typography variant="h6" component="p">
          {moment(year).format('LL')}
        </Typography>
        <IconButton aria-label="star" size="large" onClick={changeStatusFavorite}>
          {isFavorite ? <StarIcon color="error" /> : <StarBorderIcon color="error" />}
        </IconButton>
      </CardActions>
      <div className={styles.wrapperRaitCircleProgress}>
        <div className={styles.raitCircleProgress}>
          <CircularProgress
            variant="determinate"
            size={40}
            thickness={5}
            value={rait * 10}
            color={getRaitColor()}
          />
          <Typography component="span">{rait > 0 ? rait : 'NR'}</Typography>
          <CircularProgress
            variant="determinate"
            size={40}
            color="secondary"
            thickness={5}
            value={100}
          />
        </div>
      </div>
    </Card>
  );
};
export const FilmCard = React.memo(Component);
