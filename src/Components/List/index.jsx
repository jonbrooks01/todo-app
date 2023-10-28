// import React from 'react';
import { useContext, useMemo, useState } from 'react';
import { Pagination } from '@mui/material';
import { GlobalContext } from '../../App';
import { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Auth from '../Auth/auth';

const TodoList = ({ list, toggleComplete, incomplete, deleteItem }) => {
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
      <Card>
        <CardContent>
          {listToUse.slice(startIndex, endIndex).map((item) => (
            <div key={item.id}>
              <Typography
                sx={{ fontSize: 16 }}
                color="text.secondary"
                gutterBottom
              >
                To Do: {item.text}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <small>Assigned to: {item.assignee}</small>
              </Typography>

              <small>Difficulty: {item.difficulty}</small>
              <Auth>
                <div onClick={() => toggleComplete(item.id)}>
                  Complete: {item.complete.toString()}
                </div>
              </Auth>
              <CardActions>
                <Auth capability="delete">
                  <Button size="small" onClick={() => deleteItem(item.id)}>
                    Delete
                  </Button>
                </Auth>
              </CardActions>
              <hr />
            </div>
          ))}
          <Pagination
            count={count}
            variant="outlined"
            color="secondary"
            onChange={handlePageChange}
          />
        </CardContent>
      </Card>
    </>
  );
};

export default TodoList;
