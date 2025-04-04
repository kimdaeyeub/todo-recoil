import { atom, selector } from "recoil";

interface TodoType {
  text: string;
  isComplete: boolean;
  id: number;
}

export const todoListState = atom<TodoType[]>({
  key: "todoListState",
  default: [],
});

export const filterTodoListState = selector<number>({
  key: "filterTodoListState",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const filtered = todoList.filter((todo) => todo.isComplete === false);

    return filtered.length;
  },
});
