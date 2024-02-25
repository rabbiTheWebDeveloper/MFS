import { useContext } from "react";
import { TaskContext } from "../context";
import { toast } from "react-toastify";
import UMSearchBox from "./ui/UMSearchBox";

const TaskAction = ({ onAddClick }) => {
  const { dispatch } = useContext(TaskContext);
  const handelAllDelete = () => {
    const result = confirm("Are you sure you want to delete all tasks?");
    if (result) {
      dispatch({
        type: "ALL_DELETE_TASK",
      });
      toast.success("All Tasks Deleted Successfully");
    }
  };
  const onSearch = (searchTerm) => {
    dispatch({
      type: "Search",
      payload: searchTerm,
    });
  };
  return (
    <div className="mb-14 items-center justify-between sm:flex">
      <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
      <div className="flex items-center space-x-5">
        <UMSearchBox onSearch={onSearch} />
        <button
          onClick={onAddClick}
          className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
        >
          Add Task
        </button>
        <button
          className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold"
          onClick={handelAllDelete}
        >
          Delete All
        </button>
      </div>
    </div>
  );
};

export default TaskAction;
