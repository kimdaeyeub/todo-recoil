import React from "react";
import { useRecoilValue } from "recoil";
import { todoListState } from "../atom";

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <div>
      {todoList.map((todo) => (
        <div key={todo.id}>{todo.text}</div>
      ))}
    </div>
  );
};

export default TodoList;
