import { useState } from "react";

function AddTask(props) {
  const [taskText, setTaskText] = useState("");

  const handleAdd = () => {
    if (taskText.trim() === "") {
      alert("Por favor insira uma tarefa");
    } else {
      props.addTask(taskText);
      setTaskText("");
    }
  };

  return (
    <div className="bg-[#1a1d27] border border-[#2a2e3d] rounded-2xl shadow-xl shadow-black/20 p-5 flex flex-col gap-3">
      <div className="flex gap-2">
        <input
          className="flex-1 bg-[#0f1115] text-[#f1f2f6] placeholder:text-[#8b90a3] border border-[#2a2e3d] rounded-xl py-3 px-4 text-sm shadow-inner transition-colors duration-150 focus:outline-none focus:border-[#6366f1] focus:ring-4 focus:ring-[#6366f1]/15"
          type="text"
          placeholder="Digite o texto da tarefa"
          value={taskText}
          onChange={(e) => {
            setTaskText(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleAdd();
          }}
        />
        <button
          className="px-5 py-3 bg-[#6366f1] text-white font-medium text-sm rounded-xl shadow-sm
               hover:bg-[#5457d6] active:scale-[0.98] transition-all duration-150
               focus:outline-none focus:ring-4 focus:ring-[#6366f1]/25 cursor-pointer whitespace-nowrap"
          onClick={handleAdd}
        >
          Adicionar
        </button>
      </div>

      <div className="flex gap-2 pt-1 border-t border-[#2a2e3d]">
        <button
          className="mt-3 px-3 py-1.5 bg-transparent text-[#8b90a3] font-medium text-xs rounded-lg border border-[#2a2e3d]
               hover:text-[#34d399] hover:border-[#34d399]/40 active:scale-[0.98] transition-all duration-150
               focus:outline-none focus:ring-2 focus:ring-[#34d399]/20 cursor-pointer"
          onClick={() => {
            props.checkAllOn();
          }}
        >
          Marcar tudo
        </button>

        <button
          className="mt-3 px-3 py-1.5 bg-transparent text-[#8b90a3] font-medium text-xs rounded-lg border border-[#2a2e3d]
               hover:text-[#f87171] hover:border-[#f87171]/40 active:scale-[0.98] transition-all duration-150
               focus:outline-none focus:ring-2 focus:ring-[#f87171]/20 cursor-pointer"
          onClick={() => {
            props.checkAllOff();
          }}
        >
          Desmarcar tudo
        </button>
      </div>
    </div>
  );
}

export default AddTask;
