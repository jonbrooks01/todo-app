import React from 'react';
import Header from './Components/Header';
import List from './Components/List';
import Footer from './Components/Footer';

import Todo from './Components/Todo';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Todo />
        <List />
        <Footer />
      </>
    );
  }
}
