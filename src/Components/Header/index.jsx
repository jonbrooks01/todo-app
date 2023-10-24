// import React from 'react';
import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Header = ({ incomplete }) => {
  const theme = useTheme();
  return (
    <header
      data-testid="todo-header"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        background: theme.palette.secondary.main,
      }}
    >
      <h1 data-testid="todo-h1">
        To Do List: {incomplete.length} items pending
      </h1>
    </header>
  );
};

export default Header;
