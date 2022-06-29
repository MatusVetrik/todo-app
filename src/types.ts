export interface Todo {
  id: number;
  title: string;
  text: string;
  deadline: string;
  completed: boolean;
}

export interface Todos {
  id: number;
  name: string;
  todos: Array<Todo>;
}

export interface TodosList {
  todosList: Array<Todos>;
}

export interface TodosResponse extends TodosList {
  id: number;
}

export type Filter = "All" | "Completed" | "Active";
