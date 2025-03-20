import React, { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const handleLogin = () => {
    if (!auth) return;

    const success = auth.login(username, password);
    if (success) {
      console.log("Login muvaffaqiyatli!");
      navigate("/");
    } else {
      console.log("Login xato! Parol noto‘g‘ri.");
    }
  };

  return (
    <div>
      <h2>Kirish</h2>
      <input
        type="text"
        placeholder="Foydalanuvchi nomi"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Parol"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Kirish</button>
    </div>
  );
};

export default Login;
