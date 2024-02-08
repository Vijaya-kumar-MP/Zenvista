import React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LockIcon from '@mui/icons-material/Lock';
import { Link } from 'react-router-dom';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end', // Align items to the right
        position: 'fixed',
        top: 0, // Place at the top of the screen
        right: 0, // Align to the right
        width: '100%',
        zIndex: 1000, // Ensure it's above other elements
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <Link to="/">
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        </Link>
        <Link to="/about">
          <BottomNavigationAction label="About" icon={<FavoriteIcon />} />
        </Link>
        <Link to="/login">
          <BottomNavigationAction label="Login" icon={<LockIcon />} />
        </Link>
      </BottomNavigation>
    </Box>
    
  );
}
