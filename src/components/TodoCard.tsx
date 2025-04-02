import { useRecoilState } from "recoil";
import Btn from "./Btn";
import { todoListState } from "../atom";
import { useState } from "react";

const TodoCard = ({
  title,
  isComplete,
  id,
}: {
  title: string;
  isComplete: boolean;
  id: number;
}) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const [newTodo, setNewTodo] = useState(title);
  const [editMode, setEditMode] = useState(false);
  const seperateTodoList = () => {
    const targetIndex = todoList.findIndex((item) => item.id === id);
    const beforeItem = todoList.slice(0, targetIndex);
    const afterItem = todoList.slice(targetIndex + 1);
    return {
      before: beforeItem,
      after: afterItem,
      targetIndex,
    };
  };
  const toggleCompleteBtn = () => {
    const { before, after, targetIndex } = seperateTodoList();
    const currentState = todoList[targetIndex];
    setTodoList(() => [
      ...before,
      {
        isComplete: !currentState.isComplete,
        id: currentState.id,
        text: currentState.text,
      },
      ...after,
    ]);
  };
  const onClickDeleteBtn = () => {
    const { before, after } = seperateTodoList();
    setTodoList(() => [...before, ...after]);
  };
  const onClickEditBtn = () => {
    setEditMode(true);
  };
  const onClickCancleBtn = () => {
    setEditMode(false);
    setNewTodo(title);
  };
  const onClickUpdateBtn = () => {
    const { before, after, targetIndex } = seperateTodoList();
    const currentState = todoList[targetIndex];
    setTodoList(() => [
      ...before,
      {
        isComplete: isComplete,
        id: currentState.id,
        text: newTodo,
      },
      ...after,
    ]);
    setEditMode(false);
  };
  return (
    <div className="flex flex-col w-full bg-white px-4 py-5 rounded-md shadow-md">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <input
            onChange={toggleCompleteBtn}
            type="checkbox"
            className="size-5"
            checked={isComplete}
          />
          <p>{title}</p>
        </div>
        <div className="flex gap-3 items-center">
          <Btn mode="edit" onClick={onClickEditBtn} />
          <Btn mode="delete" onClick={onClickDeleteBtn} />
        </div>
      </div>
      {editMode && (
        <div className="mt-5 flex items-center gap-4">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="w-full outline-none border-b border-gray-300 px-4 py-1.5"
          />
          <div className="flex items-center gap-2">
            <button
              onClick={onClickUpdateBtn}
              className="bg-black px-4 py-2 text-white rounded-md text-sm"
            >
              Update
            </button>
            <button
              onClick={onClickCancleBtn}
              className="bg-red-600 px-4 py-2 text-white rounded-md text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoCard;
