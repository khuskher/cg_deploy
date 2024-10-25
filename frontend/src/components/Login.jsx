import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import "../CSS/LoginForm.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });
      console.log(response.data); // Login successful
      // Handle success, e.g., redirect to a success page or show a success message
      history.push("/report"); // Redirect to /feed
    } catch (error) {
      console.error("Error during login:", error);
      // Handle error, e.g., show an error message
      setError("Invalid username or password");
    }
  };

  return (
    <section>
      <div className={`container`}>
        <div className="user signinBx">
          <div className="imgBx">
            <img src={require("../images/login.jpg")} alt="" />
          </div>
          <div className="formBx">
            <form onSubmit={handleSubmit}>
              <h2>We missed you!</h2>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input type="submit" name="" value="Login" />
              {error && <p className="error">{error}</p>}
              <p className="signup">
                New here?<br />
                <Link to="/register">REGISTER</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;

