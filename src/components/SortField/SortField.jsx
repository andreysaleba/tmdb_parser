import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { setSortBy } from '../../effects/films/filmsSlice';

const options = [
  { key: 'popularity.desc', title: 'Popularity Descending' },
  { key: 'popularity.asc', title: 'Popularity Ascending' },
  { key: 'vote_average.desc', title: 'Rating Descending' },
  { key: 'vote_average.asc', title: 'Rating Ascending' },
  { key: 'primary_release_date.desc', title: 'Release Date Descending' },
  { key: 'primary_release_date.asc', title: 'Release Date Ascending' },
  { key: 'original_title.desc', title: 'Title (A-Z)' },
  { key: 'original_title.asc', title: 'Title (Z-A)' },
];

const Component = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);

  const dispatch = useDispatch();

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (index) => {
    dispatch(setSortBy(options[index].key));
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <List component="nav" aria-label="Sort Results By" sx={{ bgcolor: 'background.paper' }}>
        <ListItem
          button
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="Sort Results By"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}>
          <ListItemText primary="Sort Results By" secondary={options[selectedIndex].title} />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}>
        {options.map((option, index) => (
          <MenuItem
            key={option.key}
            disabled={index === selectedIndex}
            selected={index === selectedIndex}
            onClick={() => handleMenuItemClick(index)}>
            {option.title}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export const SortField = React.memo(Component);
