import { useState } from "react";
import AddTask from "./AddTask";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    taskText ? "" : alert();
    const newTask = {
      id: crypto.randomUUID(),
      text: taskText,
      Completed: false,
      tags: [],
    };
    setTasks([...tasks, newTask]);
  };

  const togleCompleted = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          Completed: !task.Completed,
        };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const checkAllOn = () => {
    setTasks(tasks.map((task) => ({ ...task, Completed: true })));
  };

  const checkAllOff = () => {
    setTasks(tasks.map((task) => ({ ...task, Completed: false })));
  };

  return (
    <div className="bg-[#4aa1ff] w-screen h-screen flex flex-col justify-center items-center space-y-4">
      <AddTask
        checkAllOn={checkAllOn}
        checkAllOff={checkAllOff}
        addTask={addTask}
      />

      <div className="bg-black w-[700px] p-6 space-x-6 space-y-4 rounded-md shadow text-2xl text-white flex flex-col ">
        {tasks.map((task) => {
          const key = task.id;
          return (
            <div key={key} className="flex space-x-4 items-center">
              <input
                className="h-6 w-6 rounded border-gray-300 text-indigo-300 focus:ring-indigo-500 accent-[#00ff00] cursor-pointer"
                type="checkbox"
                checked={task.Completed}
                onChange={() => {
                  togleCompleted(task.id);
                }}
              />
              <p
                className={`text-3xl ${task.Completed ? "line-through text-[#00ff00]" : ""}`}
              >
                {task.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
