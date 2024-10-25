import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../CSS/Navbar.css";

// const Navbar = () => {
//   // const [isNavVisible, setNavVisible] = useState(false);

//   // const toggleNav = () => {
//   //   setNavVisible(!isNavVisible);
//   // };

//   return (

//     <nav class="nav">
//       <div class="container">
//         <div id="mainListDiv" class="main_list">
//           <ul class="navlinks">
//             <li>
//               <a href="#" class="nav-link active">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#" class="nav-link">
//                 Report
//               </a>
//             </li>
//             <li>
//               <a href="#" class="nav-link">
//                 Feed
//               </a>
//             </li>
//             <li>
//               <a href="#" class="nav-link">
//                 Login
//               </a>
//             </li>
//           </ul>
//         </div>
//         <span class="navTrigger">
//           <i></i>
//           <i></i>
//           <i></i>
//         </span>
//       </div>
//     </nav>

//   );
// };

// export default Navbar;

// const Navbar = () => {
//   return (
//     <nav className="nav">
//       <div className="container">
//         <div id="mainListDiv" className="main_list">
//           <ul className="navlinks">
//             <li>
//               <Link to="/" className="nav-link active">Home</Link>
//             </li>
//             <li>
//               <Link to="/report" className="nav-link">Report</Link>
//             </li>
//             <li>
//               <Link to="/feed" className="nav-link">Feed</Link>
//             </li>
//             <li>
//               <Link to="/login" className="nav-link">Login</Link>
//             </li>
//           </ul>
//         </div>
//         <span className="navTrigger">
//           <i></i>
//           <i></i>
//           <i></i>
//         </span>
//       </div>
//     </nav>
//   );
// };

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div id="mainListDiv" className="main_list">
          <div className="navlinks">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>

            <NavLink to="/report" className="nav-link">
              Post
            </NavLink>

            <NavLink to="/feed" className="nav-link">
              Feed
            </NavLink>

            <NavLink to="/login" className="nav-link">
              Login/Register
            </NavLink>
          </div>
        </div>
        <span className="navTrigger">
          <i></i>
          <i></i>
          <i></i>
        </span>
      </div>
    </nav>
  );
};
export default Navbar;
