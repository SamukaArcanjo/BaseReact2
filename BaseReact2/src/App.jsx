import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Aprender React",
      Completed: false,
      tags: ["estudo", "frontend"],
    },
    {
      id: 2,
      text: "Fazer compras",
      Completed: false,
      tags: ["casa"],
    },
  ]);

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

  return (
    <div className="bg-[#4aa1ff] w-screen h-screen flex flex-col justify-center items-center space-y-4">
      <div className="bg-black h-[200px] w-[700px] p-6 space-x-6 space-y-4 rounded-md shadow text-2xl text-white">
        <input
          className="w-full bg-white text-black border border-gray-300 py-3.5 px-2 shadow-xs transition-colors duration-200 focus:outline-hidden focus:border-[#4aa1ff] focus:ring-4 focus:ring-indigo-100"
          type="text"
          placeholder="Digite o texto da tarefa "
        />
        <button
          className="px-4 py-2 bg-[#4aa1ff] text-white font-medium text-sm rounded-lg shadow-sm
             hover:bg-[#25588e] active:scale-98 transition-all duration-200
             focus:outline-hidden focus:ring-4 focus:ring-indigo-100 cursor-pointer"
        >
          Adicionar tarefa
        </button>

        <button
          className="px-2 py-2 bg-[#057a1e] text-white font-medium text-sm rounded-lg shadow-sm
             hover:bg-[#25588e] active:scale-98 transition-all duration-200
             focus:outline-hidden focus:ring-4 focus:ring-indigo-100 cursor-pointer"
          onClick={() =>
            setTasks(tasks.map((task) => ({ ...task, Completed: true })))
          }
        >
          Marcar Tudo
        </button>

        <button
          className="px-2 py-2 bg-[#780808] text-white font-medium text-sm rounded-lg shadow-sm
             hover:bg-[#25588e] active:scale-98 transition-all duration-200
             focus:outline-hidden focus:ring-4 focus:ring-indigo-100 cursor-pointer"
          onClick={() =>
            setTasks(tasks.map((task) => ({ ...task, Completed: false })))
          }
        >
          Desmarcar tudo
        </button>
      </div>

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
