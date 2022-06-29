import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";
import {Filter} from "../../../../types";

interface Props {
  filter: Filter;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
}

export const TodoFilter = ({filter, setFilter}: Props) => {
  const handleChange = (event: SelectChangeEvent) =>
    setFilter(event.target.value as Filter);

  return (
    <FormControl sx={{width: "40%", m: 1}}>
      <InputLabel>Filter</InputLabel>
      <Select value={filter} label="Filter" onChange={handleChange}>
        <MenuItem value="All">All</MenuItem>
        <MenuItem value="Active">Active</MenuItem>
        <MenuItem value="Completed">Completed</MenuItem>
      </Select>
    </FormControl>
  );
};
