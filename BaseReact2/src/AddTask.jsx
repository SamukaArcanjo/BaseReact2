import { useState } from "react";

function AddTask(props) {
  const [taskText, setTaskText] = useState("");

  return (
    <div className="bg-black h-[200px] w-[700px] p-6 space-x-6 space-y-4 rounded-md shadow text-2xl text-white">
      <input
        className="w-full bg-white text-black border border-gray-300 py-3.5 px-2 shadow-xs transition-colors duration-200 focus:outline-hidden focus:border-[#4aa1ff] focus:ring-4 focus:ring-indigo-100"
        type="text"
        placeholder="Digite o texto da tarefa "
        value={taskText}
        onChange={(e) => {
          setTaskText(e.target.value);
        }}
      />
      <button
        className="px-4 py-2 bg-[#4aa1ff] text-white font-medium text-sm rounded-lg shadow-sm
             hover:bg-[#25588e] active:scale-98 transition-all duration-200
             focus:outline-hidden focus:ring-4 focus:ring-indigo-100 cursor-pointer"
        onClick={() => {
          if (taskText.trim() === "") {
            alert("Por favor insira uma tarefa");
          } else {
            props.addTask(taskText);
            setTaskText("");
          }
        }}
      >
        Adicionar tarefa
      </button>

      <button
        className="px-2 py-2 bg-[#057a1e] text-white font-medium text-sm rounded-lg shadow-sm
             hover:bg-[#25588e] active:scale-98 transition-all duration-200
             focus:outline-hidden focus:ring-4 focus:ring-indigo-100 cursor-pointer"
        onClick={() => {
          props.checkAllOn();
        }}
      >
        Marcar Tudo
      </button>

      <button
        className="px-2 py-2 bg-[#780808] text-white font-medium text-sm rounded-lg shadow-sm
             hover:bg-[#25588e] active:scale-98 transition-all duration-200
             focus:outline-hidden focus:ring-4 focus:ring-indigo-100 cursor-pointer"
        onClick={() => {
          props.checkAllOff();
        }}
      >
        Desmarcar tudo
      </button>
    </div>
  );
}

export default AddTask;
