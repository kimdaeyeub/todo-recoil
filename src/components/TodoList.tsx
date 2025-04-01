import { useRecoilValue } from "recoil";
import { todoListState } from "../atom";
import TodoCard from "./TodoCard";

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <div className="mt-4">
      {todoList.map((todo) => (
        <TodoCard
          key={todo.id}
          title={todo.text}
          id={todo.id}
          isComplete={todo.isComplete}
        />
      ))}
    </div>
  );
};

export default TodoList;
