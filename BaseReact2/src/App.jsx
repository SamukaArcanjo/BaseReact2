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
    <div>
      <div>
        <input type="text" placeholder="Digite o texto da tarefa " />
        <button>Adicionar tarefa</button>
      </div>

      <div>
        {tasks.map((task) => {
          const key = task.id;
          return <p>{task.text}</p>;
        })}
      </div>
    </div>
  );
}

export default App;
