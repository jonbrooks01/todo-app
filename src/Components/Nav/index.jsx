// import React from 'react';

import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <Button component={Link} to="/home">
          <HomeIcon /> Home
        </Button>
        <Button component={Link} to="/settings">
          <SettingsIcon /> Settings
        </Button>
      </ul>
    </nav>
  );
};

export default NavBar;
