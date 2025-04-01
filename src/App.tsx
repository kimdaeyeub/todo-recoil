import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="mx-auto max-w-1/2 py-12 px-10 min-h-screen bg-gray-200">
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default App;
