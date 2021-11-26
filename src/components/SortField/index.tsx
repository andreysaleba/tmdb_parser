import React, { useRef, useState } from 'react';
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
  { key: 'title.asc', title: 'Title (A-Z)' },
  { key: 'title.desc', title: 'Title (Z-A)' },
];

const Component = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const ref = useRef(null);
  const dispatch = useDispatch();

  const handleMenuItemClick = (index: number) => {
    setSelectedIndex(index);
    setIsOpen(false);
    dispatch(setSortBy(options[index].key));
  };

  return (
    <div>
      <List component="nav" aria-label="Sort Results By" sx={{ bgcolor: 'background.paper' }}>
        <ListItem
          ref={ref}
          button
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="Sort Results By"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(true)}>
          <ListItemText primary="Sort Results By" secondary={options[selectedIndex].title} />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={ref.current}
        open={isOpen}
        onClose={() => setIsOpen(false)}
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
