// import { useReducer } from "react";
// import Home from "./pages/Home";
// import { initialState, tasksReducer } from "./reducers/TasksReducer";
// import { TaskContext } from "./context";

import User from "./pages/User";

// function App() {
//   const [state, dispatch] = useReducer(tasksReducer, initialState);
//   return (
//     <TaskContext.Provider value={{ state, dispatch }}>
//       <Home />
//     </TaskContext.Provider>
//   );
// }

// export default App;

const App = () => {
  return <User />;
};

export default App;
