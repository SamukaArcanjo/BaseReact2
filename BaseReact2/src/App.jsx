import { useState } from "react";
import AddTask from "./AddTask";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
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
    <div className="bg-[#0f1115] w-screen min-h-screen flex flex-col items-center py-16 px-4">
      <div className="w-full max-w-[640px] flex flex-col gap-6">
        <div>
          <h1 className="text-[#f1f2f6] text-3xl font-semibold tracking-tight">
            Tarefas
          </h1>
          <p className="text-[#8b90a3] text-sm mt-1">
            {tasks.filter((t) => t.Completed).length} de {tasks.length}{" "}
            concluídas
          </p>
        </div>

        <AddTask
          checkAllOn={checkAllOn}
          checkAllOff={checkAllOff}
          addTask={addTask}
        />

        <div className="bg-[#1a1d27] border border-[#2a2e3d] rounded-2xl shadow-xl shadow-black/20 divide-y divide-[#2a2e3d] overflow-hidden">
          {tasks.length === 0 && (
            <p className="text-[#8b90a3] text-sm text-center py-10 px-6">
              Nenhuma tarefa ainda. Adicione a primeira acima.
            </p>
          )}

          {tasks.map((task) => {
            const key = task.id;
            return (
              <div
                key={key}
                className="flex items-center gap-4 px-5 py-4 hover:bg-white/[0.02] transition-colors duration-150"
              >
                <input
                  className="h-5 w-5 shrink-0 rounded-md border-2 border-[#2a2e3d] bg-transparent accent-[#34d399] cursor-pointer transition-colors"
                  type="checkbox"
                  checked={task.Completed}
                  onChange={() => {
                    togleCompleted(task.id);
                  }}
                />
                <p
                  className={`text-base transition-colors duration-150 ${
                    task.Completed
                      ? "line-through text-[#8b90a3]"
                      : "text-[#f1f2f6]"
                  }`}
                >
                  {task.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
