import {ThemeProvider} from "@emotion/react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App";
import {TodoListForm} from "./components/forms/TodoListForm";

import Header from "./components/UI/Header";
import "./index.css";
import {store} from "./redux/store";
import {theme} from "./theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route
            path="/todos"
            element={
              <>
                <App />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <TodoListForm />
              </>
            }
          />
        </Routes>
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);
