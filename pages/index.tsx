import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '@mui/material';
import {
  filmsSelector,
  sortBySelector,
  pageSelector,
  statusSelector,
} from '../src/effects/films/filmsSelector';
import { fetchFilms } from '../src/effects/films/filmsSlice';
import { favoriteListSelector } from '../src/effects/favorite/favoriteSelectors';
import { FilmCard, SortField, FilmPagination, Loader, ErrorComponent } from '../src/components';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const films = useSelector(filmsSelector);
  const sortBy = useSelector(sortBySelector);
  const page = useSelector(pageSelector);
  const favoriteList = useSelector(favoriteListSelector);
  const status = useSelector(statusSelector);

  useEffect(() => {
    dispatch(fetchFilms({ sortBy, page }));
    window.scrollTo(0, 0);
  }, [sortBy, page, dispatch]);

  const body = () => {
    switch (status) {
      case 'loading':
        return <Loader />;
      case 'idle':
        return (
          <>
            <div className={styles.container}>
              {films?.map(({ title, vote_average, id, release_date, poster_path }) => (
                <FilmCard
                  title={title}
                  year={release_date}
                  src={poster_path}
                  rait={vote_average}
                  key={id}
                  id={id}
                  isFavorite={favoriteList.includes(id)}
                />
              ))}
            </div>
            <FilmPagination page={page} />
          </>
        );
      case 'failed':
        return <ErrorComponent />;
      default:
        return null;
    }
  };

  return (
    <Container>
      <SortField />
      {body()}
    </Container>
  );
};

export default Home;
