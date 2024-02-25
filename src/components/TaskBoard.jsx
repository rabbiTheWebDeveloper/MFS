import { useContext, useState } from "react";
import TaskAction from "./TaskAction";
import UMModel from "./ui/UMModel";
import UMTabel from "./ui/UMTabel";
import { TaskContext } from "../context";
import { toast } from "react-toastify";
import NoTasksFound from "./ui/NoTasksFound";

const TaskBoard = () => {
  const { state, dispatch } = useContext(TaskContext);
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);
  function handleCloseClick() {
    setShowAddModal(false);
    setTaskToUpdate(null);
  }
  const handleAddEditTask = (e, task, isAdd) => {
    e.preventDefault();
    if (
      task.title.trim() === "" ||
      task.description.trim() === "" ||
      task.priority === ""
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }
    if (isAdd) {
      dispatch({
        type: "CREATE_TASK",
        payload: {
          ...task,
        },
      });
      toast.success("Task Added Successfully");
    } else {
      dispatch({
        type: "UPDATE_TASK",
        payload: {
          ...task,
        },
      });
      toast.success("Task Updated Successfully");
      setTaskToUpdate(null);
    }
    setShowAddModal(false);
  };

  function handleEditTask(task) {
    setTaskToUpdate(task);
    setShowAddModal(true);
  }
  const handleDelete = (id) => {
    console.log(id);
    const result = confirm("Are you sure you want to delete this task!");
    if (result) {
      dispatch({
        type: "DELETE_TASK",
        payload: id,
      });
      toast.success("Task Deleted Successfully");
    }
  };
  const handelFavorite = (id) => {
    console.log(id);
    dispatch({
      type: "IS_FAVORITE",
      payload: id,
    });
  };

  return (
    <section className="mb-20" id="tasks">
      {showAddModal && (
        <UMModel
          onSave={handleAddEditTask}
          onCloseClick={handleCloseClick}
          taskToUpdate={taskToUpdate}
        />
      )}
      <div className="container">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction onAddClick={() => setShowAddModal(true)} />
          <div className="overflow-auto">
            {state?.isSearchTask?.length > 0 || state?.tasksData?.length > 0 ? (
              <UMTabel
                tasksData={
                  (state.isSearchTask?.length > 0 && state.isSearchTask) ||
                  state.tasksData
                }
                onDeleteClick={handleDelete}
                onEdit={handleEditTask}
                onFavorite={handelFavorite}
              />
            ) : (
              <NoTasksFound />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
