import { useContext, useReducer } from "react";
import TaskBoard from "./TaskBoard";
import TaskReducer from "../Reducer/TaskReducer";
import { ThemeContext } from "../Context/ThemeContext";

export function Paper() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [tasks, dispatch] = useReducer(TaskReducer, []);

  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <div
      className={`min-h-screen flex justify-center py-10 ${
        theme === "light" ? "bg-sky-200" : "bg-gray-900"
      }`}
    >
      <div
        className={`w-4/5 max-w-5xl px-8 py-6 ${
          theme === "light"
            ? "bg-amber-50 text-black"
            : "bg-zinc-800 text-white"
        }`}
      >
        {/* Header */}
        <div className="text-center text-5xl uppercase text-red-500 border-b-4 border-red-500 pb-3 mb-6">
          Don't Forget To...
        </div>

        {/* Tasks */}
        <TaskBoard
          theme={theme}
          toggleTheme={toggleTheme}
          tasks={tasks}
          dispatch={dispatch}
        />

        {/* Footer */}
        <div className="text-center text-3xl uppercase text-red-500 border-t-4 border-red-500 pt-3 mt-6">
          {completedTasks} out of {tasks.length} Tasks Completed
        </div>
      </div>
    </div>
  );
}

export default Paper;