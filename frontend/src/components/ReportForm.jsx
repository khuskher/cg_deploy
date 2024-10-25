import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../CSS/ReportForm.css";
import Footer2 from "./Footer2";

const ReportForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    time: "",
    date: "",
    area: "",
    city: "",
    state: "",
    category: "",
    description: "",
  });  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const history = useHistory();

  useEffect(() => {
    checkAuthentication();
  }, []);

  const checkAuthentication = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/login");
      setIsAuthenticated(response.data.isAuthenticated);
    } catch (error) {
      console.error("Error checking authentication:", error);
      history.push("/login"); // Redirect to login page on error
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/reports",
        formData
      );
      console.log(response.data); // Report submitted successfully

      // Handle success, e.g., redirect to a success page or show a success message
      history.push("/feed"); // Redirect to /success
    } catch (error) {
      console.error("Error during report submission:", error);
      history.push("/error");
      // Handle error, e.g., show an error message
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/logout");
      console.log(response.data); // Logout successful
      // Handle success, e.g., redirect to a success page or show a success message
      history.push("/"); // Redirect to the home page after logout
    } catch (error) {
      console.error("Error during logout:", error);
      // Handle error, e.g., show an error message
    }
  };

  return (
    <div>
      <div className="container">
        <div className="section-contact">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8">
              <div className="header-section">
                <h2 className="title">
                  Report Now
                  <span className="big-title">CRIME</span>
                </h2>
              </div>
            </div>
          </div>

          <div className="form-contact">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="single-input">
                    <p>What happened?</p>
                    <i className="fas fa-user"></i>
                    <input
                      type="text"
                      name="title"
                      placeholder="Title"
                      value={formData.title}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-sm-3">
                  <div className="single-input">
                    <i className="fas fa-clock"></i>
                    <p>Time of incident:</p>
                    <input
                      type="time"
                      name="time"
                      placeholder="Enter Time"
                      value={formData.time}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-sm-3">
                  <div className="single-input">
                    <i className="far fa-calendar-alt"></i>
                    <p>Date of incident:</p>
                    <input
                      type="date"
                      name="date"
                      placeholder="Enter Date"
                      value={formData.date}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-sm-3">
                  <div className="single-input">
                    <i className="fas fa-list"></i>
                    <p>Type of incident:</p>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                    >
                      <option className="dropdown" value="">
                        Select{" "}
                      </option>
                      <option value="Theft">Theft</option>
                      <option value="Arson">Arson</option>
                      <option value="Murder">Murder</option>
                      <option value="Other">
                        Other, specify in description
                      </option>
                    </select>
                  </div>
                </div>

                <div className="col-sm-3">
                  <div className="single-input">
                    <i className="fas fa-map-marker-alt"></i>
                    <p>Where did it occur?</p>
                    <input
                      type="text"
                      name="area"
                      placeholder="Area"
                      value={formData.area}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-sm-3">
                  <div className="single-input">
                    <i className="fas fa-city"></i>
                    <p className="fill">City:</p>
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-sm-3">
                  <div className="single-input">
                    <i className="fas fa-globe"></i>
                    <p className="fill">State:</p>
                    <input
                      type="text"
                      name="state"
                      placeholder="State"
                      value={formData.state}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="single-input">
                    <i className="fas fa-comments"></i>
                    <textarea
                      name="description"
                      placeholder="Description"
                      value={formData.description}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="submit-input text-center">
                    <input type="submit" name="submit" value="SUBMIT NOW"/>
                  </div>
                  <div className="submit-input text-center">
                    <input
                      type="button"
                      onClick={handleLogout}
                      value="LOGOUT"
                    />
                  </div>
                  {/* <div className="submit-input text-center">
                    <button type="button" onClick={handleLogout}>
                      LOGOUT
                    </button>
                  </div> */}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default ReportForm;
