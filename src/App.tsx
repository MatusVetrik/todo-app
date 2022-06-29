import {useEffect} from "react";
import TodosList from "./components/todos/TodosList";
import {useAppDispatch} from "./redux/hooks";
import {getData} from "./server";

function App() {
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
