import {Card, CardActions, CardContent, Grid, Typography} from "@mui/material";
import {useState} from "react";
import {Filter, Todo, Todos} from "../../../types";
import {TodoItemForm} from "../../forms/TodoItemForm";
import {TodoFilter} from "./inputs/TodoFilter";
import TodoSearch from "./inputs/TodoSearch";
import TodoItem from "./item/TodoItem";
import TodoHeader from "./TodoHeader";

interface Props {
  todoList: Todos | null;
}

export const TodoCard = ({todoList}: Props) => {
  const filteredItems = () =>
    filter === "Completed"
      ? todoList?.todos
          ?.filter((el) => el.completed)
          .map((todo) => todoItem(todo, todoList.id))
      : todoList?.todos
          ?.filter((el) => (filter === "Active" ? !el.completed : el))
          .map((todo) => todoItem(todo, todoList.id));

  const options = todoList?.todos?.map((todo) => todo.title);

  const [filter, setFilter] = useState<Filter>("All");

  const [searchedTodo, setsearchedTodo] = useState<string>("");

  const todoItem = (todo: Todo, listId: number) => (
    <TodoItem
      key={todo.id}
      id={todo.id}
      completed={todo.completed}
      title={todo.title}
      text={todo.text}
      deadline={todo.deadline}
      listId={listId}
    />
  );

  return (
    <Card sx={{maxWidth: "100%", m: 2, p: 2, boxShadow: 3}}>
      <CardContent>
        <TodoHeader todoList={todoList} />
        <Grid
          container
          alignItems="center"
          direction="row"
          justifyContent="left"
        >
          <TodoFilter filter={filter} setFilter={setFilter} />
          <TodoSearch setSearchedTodo={setsearchedTodo} options={options} />
        </Grid>
        <Typography variant="body2" color="text.secondary" component="div">
          {searchedTodo
            ? todoList?.todos?.map(
                (todo) =>
                  searchedTodo === todo.title && todoItem(todo, todoList.id)
              )
            : filteredItems()}
        </Typography>
      </CardContent>
      <CardActions>
        <TodoItemForm listId={todoList?.id!} />
      </CardActions>
    </Card>
  );
};
