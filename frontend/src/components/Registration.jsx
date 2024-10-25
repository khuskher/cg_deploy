import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import "../CSS/LoginForm.css";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/register", {
        username,
        email,
        password,
      });
      console.log(response.data); // Registration successful
      // Handle success, e.g., redirect to a success page or show a success message
      history.push("/login"); // Redirect to /feed
    } catch (error) {
      console.error("Error during registration:", error);
      // Handle error, e.g., show an error message
      setError("Registration failed");
    }
  };

  return (
    <section>
      <div className={`container`}>
        <div className="user signinBx">
          <div className="imgBx">
            <img src={require("../images/reg.jpg")} alt="" />
          </div>
          <div className="formBx">
            <form onSubmit={handleSubmit}>
              <h2>Join Us!</h2>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                name="password"
                placeholder="Create Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <input type="submit" name="" value="Register" />
              {error && <p className="error">{error}</p>}
              <p className="signup">
                One of us?<br />
                <Link to="/login">LOGIN</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
