import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/userSlice";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple dummy authentication check
    if (username && password) {
      const userData = { name: username };
      dispatch(login(userData)); // Save to Redux
      navigate("/dashboard"); // Redirect to Dashboard
    } else {
      setMsg("Please enter both username and password");
    }
  };

  return (
    <div className="main-container">
      <div className="login-container">
        <h2>Login</h2>
        {msg ? <h3>*{msg}*</h3> : ""}
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
