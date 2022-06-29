import {Autocomplete, TextField} from "@mui/material";
import React from "react";

interface Props {
  setSearchedTodo: React.Dispatch<React.SetStateAction<string>>;
  options: Array<string> | undefined;
}

const TodoSearch = ({setSearchedTodo, options}: Props) => {
  return (
    <Autocomplete
      disablePortal
      sx={{width: "40%"}}
      id="combo-box-demo"
      options={options!}
      onInputChange={(event, newInputValue) => {
        setSearchedTodo(newInputValue);
      }}
      renderInput={(params) => (
        <TextField {...params} label="Search Todo Item" />
      )}
    />
  );
};

export default TodoSearch;
