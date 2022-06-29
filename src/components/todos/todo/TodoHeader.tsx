import {Button, Grid, Typography} from "@mui/material";
import React from "react";
import {useAppDispatch} from "../../../redux/hooks";
import {deleteTodoList} from "../../../redux/reducer";
import {Todos} from "../../../types";

interface Props {
  todoList: Todos | null;
}

const TodoHeader = ({todoList}: Props) => {
  const dispatch = useAppDispatch();

  return (
    <Grid
      container
      alignItems="center"
      direction="row"
      justifyContent="space-between"
    >
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{m: 1, fontWeight: "bold"}}
      >
        {todoList?.name}
      </Typography>
      <Button
        size="small"
        sx={{color: "#d1231d"}}
        onClick={() =>
          dispatch(
            deleteTodoList({
              listId: todoList?.id!,
            })
          )
        }
      >
        Delete
      </Button>
    </Grid>
  );
};

export default TodoHeader;
