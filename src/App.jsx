import React, { createContext } from 'react';

import Todo from './Components/Todo';

export const GlobalContext = createContext(null);

export default class App extends React.Component {
  render() {
    return (
      <GlobalContext.Provider
        value={{
          displayCount: 1,
          hideCompleted: false,
          sortWord: 'difficulty',
        }}
      >
        <Todo />
      </GlobalContext.Provider>
    );
  }
}
