// import React from 'react';
import { useContext, useMemo, useState } from 'react';
import { Pagination } from '@mui/material';
import { GlobalContext } from '../../App';
import { useEffect } from 'react';

const TodoList = ({ list, toggleComplete, incomplete }) => {
  const { hideCompleted, displayCount } = useContext(GlobalContext);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);

  const listToUse = useMemo(() => {
    console.log(hideCompleted, incomplete, list);
    if (hideCompleted) return incomplete;
    else return list;
  }, [hideCompleted, incomplete, list]);

  useEffect(() => {
    const totalPages = Math.floor(listToUse.length / displayCount);
    const addOne = listToUse.length % displayCount;
    console.log(totalPages, addOne);
    setCount(addOne ? totalPages + 1 : totalPages);
  }, [displayCount, listToUse]);

  const handlePageChange = (e, newPage) => {
    setPage(newPage);
  };

  const startIndex = useMemo(() => {
    return (page - 1) * displayCount;
  }, [displayCount, page]);

  const endIndex = useMemo(() => {
    return (page - 1) * displayCount + displayCount;
  }, [page, displayCount]);

  return (
    <>
      {listToUse.slice(startIndex, endIndex).map((item) => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p>
            <small>Assigned to: {item.assignee}</small>
          </p>
          <p>
            <small>Difficulty: {item.difficulty}</small>
          </p>
          <div onClick={() => toggleComplete(item.id)}>
            Complete: {item.complete.toString()}
          </div>
          <hr />
        </div>
      ))}
      <Pagination
        count={count}
        variant="outlined"
        color="secondary"
        onChange={handlePageChange}
      />
    </>
  );
};

export default TodoList;
