import {useEffect} from "react";
import TodosList from "./components/todos/TodosList";
import {useAppDispatch, useAppSelector} from "./redux/hooks";
import {getData} from "./server";

function App() {
  const todos = useAppSelector((state) => state.todosListReducer.todosList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getData(dispatch);
  }, []);

  return (
    <div className="App">
      <TodosList />
    </div>
  );
}

export default App;
