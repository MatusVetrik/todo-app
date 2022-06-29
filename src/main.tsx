import {ThemeProvider} from "@emotion/react";
import {createTheme} from "@mui/material";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App";
import {TodoListForm} from "./components/forms/TodoListForm";

import Header from "./components/UI/Header";
import "./index.css";
import {store} from "./redux/store";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7D4CDB",
    },
    secondary: {
      main: "#F8F8F8",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route
            path="/todos"
            element={
              <>
                <Header />
                <App />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <TodoListForm />
              </>
            }
          />
        </Routes>
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);
