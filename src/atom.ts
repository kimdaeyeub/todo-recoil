import { atom } from "recoil";

interface TodoType {
  text: string;
  isComplete: boolean;
  id: number;
}

export const todoListState = atom<TodoType[]>({
  key: "todoListState",
  default: [],
});
