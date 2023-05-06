import React, { useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import './Admin.css'

function Admin() {
    const location=useLocation()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "admin@example.com" && password === "admin") {
      const user = { email: email, password: password };
      navigate("/about", { state: { user } });
    } else {
      // Show an error message if the credentials are invalid
      alert("Invalid email or password");
    }
  };
  if (location.pathname !== '/admin') {
    return null;
  }

  return (
    <div className="container-admin">
      <h1 className="heading-admin">Admin Section</h1>
      <div className="form_container-admin">
        <div className="left-admin">
          <img className="img-admin" src="https://raw.githubusercontent.com/Avverma9/Radiator/main/client/public/images/login.jpg" alt="login" />
        </div>
        <div className="right-admin">
          <h2 className="from_heading-admin">Log in</h2>
          <input
            type="text"
            className="input-admin"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="input-admin"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn-admin" onClick={handleLogin}>
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Admin;
