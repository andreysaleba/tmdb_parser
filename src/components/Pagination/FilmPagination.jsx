import React from 'react';
import { useDispatch } from 'react-redux';
import Pagination from '@mui/material/Pagination';
import { setPage } from '../../effects/films/filmsSlice';

const Component = ({page}) => {
  const dispatch = useDispatch();
  const paginationHandler = (page) => {
    dispatch(setPage(page));
  };
  return <Pagination page={page} count={25} onChange={(_, page) => paginationHandler(page)} />;
};

export const FilmPagination = React.memo(Component);
