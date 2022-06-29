import {Grid, Typography} from "@mui/material";
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
      {todosList.length > 0 ? (
        todosList.map((todo, index) => <TodoCard todoList={todo} key={index} />)
      ) : (
        <Typography variant="h4" sx={{m: 10, opacity: 0.3}}>
          Todos list is empty...
        </Typography>
      )}
    </Grid>
  );
};

export default TodosList;
