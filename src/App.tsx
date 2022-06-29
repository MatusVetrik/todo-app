import {useEffect} from "react";
import TodosList from "./components/todos/TodosList";
import Header from "./components/UI/Header";
import {useAppDispatch} from "./redux/hooks";
import {getData} from "./server";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => getData(dispatch), []);

  return (
    <div className="App">
      <Header />
      <TodosList />
    </div>
  );
}

export default App;
