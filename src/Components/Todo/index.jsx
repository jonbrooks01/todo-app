import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/form';

import { v4 as uuid } from 'uuid';
import Header from '../Header';
import TodoList from '../List';
import TodoForm from '../TodoForm';
import dummyData from './dummyData.json';
import Auth from '../Auth/auth';
import axios from 'axios';
import Footer from '../Footer';

const Todo = () => {
  const [defaultValues] = useState({
    difficulty: 2,
  });
  const [list, setList] = useState(dummyData);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    console.log(item);

    const sortedList = [...list, item];

    sortedList.sort((a, b) => a.difficulty - b.difficulty);
    setList(sortedList);
  }

  function deleteItem(id) {
    const items = list.filter((item) => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {
    const items = list.map((item) => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });
    const newIncomplete = items.filter((it) => !it.complete);
    setIncomplete(newIncomplete);
    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter((item) => !item.complete);
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete.length}`;
    // linter will want 'incomplete' added to dependency array unnecessarily.
    // disable code used to avoid linter warning
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);

  return (
    <>
      <Header incomplete={incomplete} />
      <Auth capability={'create'}>
        <TodoForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          defaultValues={defaultValues}
          deleteItem={deleteItem}
        />
      </Auth>

      <TodoList
        list={list}
        toggleComplete={toggleComplete}
        incomplete={incomplete}
        deleteItem={deleteItem}
      />
      <Footer />
    </>
  );
};

export default Todo;
