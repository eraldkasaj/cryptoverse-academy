import '../components/Login.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (foundUser) {
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("loggedInUser", email);
      alert("Hyrja u krye me sukses!");
      navigate("/");
    } else {
      alert("Email ose password i gabuar!");
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h1>Welcome back to Cryptoverse</h1>
        <form onSubmit={handleLogin}>
          <label>Email/Phone number</label>
          <input
            type="email"
            placeholder="Enter your email/phone"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="btn-primary mt-4">Log In</button>
        </form>

        <div className="divider"><span>or</span></div>
        <button className="btn-google">Continue with Google</button>
        <button className="btn-apple">Continue with Apple</button>
      </div>
    </div>
  );
};

export default Login;
