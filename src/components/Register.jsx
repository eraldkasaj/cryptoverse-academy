import '../components/Register.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  const handleSignUp = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.find((u) => u.email === email);
    if (userExists) {
      alert("Ky email është regjistruar tashmë!");
      return;
    }
    const newUser = { email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Regjistrimi u krye me sukses!");
    navigate("/login"); 
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h1>Welcome to Cryptoverse</h1>
        <form onSubmit={handleSignUp}>
          <label>Email/Phone number</label>
          <input
            type="email"
            placeholder="Email/Phone (without country code)"
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

          <div className="checkbox-row">
            <input type="checkbox" required />
            <span>
              By creating an account, I agree to Cryptoverse’s{" "}
              <a href="#">Terms of Service</a> and{" "}
              <a href="#">Privacy Notice</a>.
            </span>
          </div>

          <button type="submit" className="btn-primary">Continue</button>
        </form>

        <div className="divider">
          <span>or</span>
        </div>

        <button className="btn-google">Continue with Google</button>
        <button className="btn-apple">Continue with Apple</button>
      </div>
    </div>
  );
};

export default Register;

