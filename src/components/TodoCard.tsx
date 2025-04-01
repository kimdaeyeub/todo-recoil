import Btn from "./Btn";

const TodoCard = ({
  title,
  isComplete,
  id,
}: {
  title: string;
  isComplete: boolean;
  id: number;
}) => {
  const toggleCompleteBtn = () => {};
  return (
    <div className="flex w-full justify-between items-center bg-white px-4 py-5 rounded-md shadow-md">
      <div className="flex gap-3 items-center">
        <input
          onChange={toggleCompleteBtn}
          type="radio"
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
