import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../atom";

const TodoForm = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoListState = useSetRecoilState(todoListState);
  const onClickAddTodoBtn = () => {
    if (inputValue !== "") {
      setTodoListState((prev) => {
        const lastItemId = prev.length === 0 ? 0 : prev[prev.length - 1].id;

        return [
          ...prev,
          { text: inputValue, isComplete: false, id: lastItemId + 1 },
        ];
      });
      setInputValue("");
    }
  };

  return (
    <div className="w-full flex justify-center gap-4 items-center">
      <input
        placeholder="Add your todo."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-full outline-none border px-3 py-2 rounded-md border-gray-300 shadow-sm"
      />
      <button
        className="px-5 py-2 bg-black text-white rounded-md"
        onClick={onClickAddTodoBtn}
      >
        Submit
      </button>
    </div>
  );
};

export default TodoForm;
