import { useRecoilState } from "recoil";
import Btn from "./Btn";
import { todoListState } from "../atom";

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
    console.log("Toggle");
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
  return (
    <div className="flex w-full justify-between items-center bg-white px-4 py-5 rounded-md shadow-md">
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
        <Btn mode="edit" />
        <Btn mode="delete" />
      </div>
    </div>
  );
};

export default TodoCard;
