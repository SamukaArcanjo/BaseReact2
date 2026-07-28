import { useState } from "react";
import { EyeOff, Eye } from "lucide-react";

function App() {
  const [userName, setUserName] = useState("");
  const [passWordVisible, setPasswordVisible] = useState(false);

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="digite o nome de usuario"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <input
          type={passWordVisible ? "text" : "password"}
          placeholder="Digite a senha"
        />

        <button
          onClick={() => {
            setPasswordVisible((pass) => !pass);
          }}
        >
          {passWordVisible ? <Eye /> : <EyeOff />}
        </button>
      </div>
      <h2>Bem vindo {userName}</h2>
    </div>
  );
}

export default App;
