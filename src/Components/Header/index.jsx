// import React from 'react';
import { Button } from '@mui/material';

const Header = ({ incomplete }) => {
  return (
    <header
      data-testid="todo-header"
      style={{ display: 'flex', justifyContent: 'space-between' }}
    >
      <h1 data-testid="todo-h1">
        To Do List: {incomplete.length} items pending
      </h1>
    </header>
  );
};

export default Header;
