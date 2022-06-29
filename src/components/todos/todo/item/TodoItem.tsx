import {
  Button,
  Card,
  CardActions,
  FormControlLabel,
  Switch,
} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../../../redux/hooks";
import {
  deleteItemFromTodoList,
  setItemCompleted,
} from "../../../../redux/reducer";
import {Todo} from "../../../../types";
import {ItemContent} from "./ItemContent";

interface Props extends Todo {
  listId: number;
}

const TodoItem = ({id, title, text, deadline, listId}: Props) => {
  const dispatch = useAppDispatch();

  const completeStatus: boolean | undefined = useAppSelector(
    (state) =>
      state.todosListReducer.todosList
        .find((list) => list.id == listId)
        ?.todos.find((todo) => todo.id == id)?.completed
  );

  const handleChange = (e: any) => {
    dispatch(
      setItemCompleted({
        listId: listId,
        todoId: id,
        status: e.target.checked!,
      })
    );
  };
  return (
    <Card sx={{maxWidth: "80%", m: 1.5, background: "#c2abdb", boxShadow: 1}}>
      <ItemContent text={text} title={title} deadline={deadline} />
      <CardActions sx={{ml: 1.5}}>
        <FormControlLabel
          control={<Switch checked={completeStatus} />}
          onChange={handleChange}
          label="Done"
        />
        <Button
          size="small"
          sx={{color: "#d1231d"}}
          onClick={() => {
            dispatch(
              deleteItemFromTodoList({
                listId: listId,
                todoId: id,
              })
            );
          }}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default TodoItem;
