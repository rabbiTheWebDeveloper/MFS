/* eslint-disable no-case-declarations */
/* eslint-disable no-unreachable */
const initialState = {
  tasksData: [],
  isSearchTask: [],
};

const tasksReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "CREATE_TASK":
      return {
        tasksData: [...state.tasksData, action.payload],
        isSearchTask: [...state.tasksData, action.payload],
      };

    case "DELETE_TASK":
      return {
        ...state,
        tasksData: state.tasksData.filter((x) => x.id != action.payload),
        isSearchTask: state.isSearchTask.filter((x) => x.id != action.payload),
      };

    case "ALL_DELETE_TASK":
      return {
        ...state,
        tasksData: [],
        isSearchTask: [],
      };

    case "UPDATE_TASK":
      return {
        ...state,
        tasksData: state.tasksData.map((task) => {
          if (task.id === action.payload.id) {
            return action.payload;
          }
          return task;
        }),
        isSearchTask: state.isSearchTask.map((task) => {
          if (task.id === action.payload.id) {
            return action.payload;
          }
          return task;
        }),
      };

    case "IS_FAVORITE":
      return {
        ...state,
        tasksData: state.tasksData.map((task) => {
          if (task.id === action.payload.id) {
            const updatedTask = {
              ...task,
              isFavorite: !task.isFavorite,
            };
            return updatedTask;
          }
          return task;
        }),
        isSearchTask: state.isSearchTask.map((task) => {
          if (task.id === action.payload.id) {
            const updatedTask = {
              ...task,
              isFavorite: !task.isFavorite,
            };
            return updatedTask;
          }
          return task;
        }),
      };

    case "Search":
      const searchInput = action.payload.trim().toLowerCase();
      const filteredTasks = searchInput
        ? state.tasksData.filter((task) =>
            task.title.toLowerCase().includes(searchInput)
          )
        : [...state.tasksData];
      return {
        ...state,
        isSearchTask: filteredTasks,
      };

    default:
      return state;
  }
};

export { initialState, tasksReducer };
