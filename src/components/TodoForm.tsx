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
    <div>
      <input
        placeholder="Add your todo."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={onClickAddTodoBtn}>Submit</button>
    </div>
  );
};

export default TodoForm;
