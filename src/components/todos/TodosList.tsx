import {Grid} from "@mui/material";
import {useAppSelector} from "../../redux/hooks";
import {TodoCard} from "./todo/TodoCard";

const TodosList = () => {
  const todosList = useAppSelector((state) => state.todosListReducer.todosList);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      {todosList &&
        todosList.map((todo, index) => (
          <TodoCard todoList={todo} key={index} />
        ))}
    </Grid>
  );
};

export default TodosList;
