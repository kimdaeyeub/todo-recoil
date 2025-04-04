import { useRecoilValue } from "recoil";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { filterTodoListState } from "./atom";

const App = () => {
  const count = useRecoilValue(filterTodoListState);
  return (
    <div className="mx-auto max-w-1/2 py-12 px-10 min-h-screen bg-gray-200">
      <TodoForm />
      <div className="w-full flex justify-end">
        <span className="font-bold text-3xl text-gray-300 my-4">
          미완료: {count}
        </span>
      </div>
      <TodoList />
    </div>
  );
};

export default App;
