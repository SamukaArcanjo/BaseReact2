import { useState } from "react";
import { EyeOff } from "lucide-react";

function App() {
  const [userName, setUserName] = useState("");
  const [PasswordVisible, setPasswordVisible] = useState(false);

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
          type={!PasswordVisible ? "text" : "password"}
          placeholder="Digite a senha"
        />

        <button>
          <EyeOff />
        </button>
      </div>
    </div>
  );
}

export default App;
