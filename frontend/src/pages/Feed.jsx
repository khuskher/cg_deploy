import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer2 from "../components/Footer2";
import Feedbox from "../components/Feedbox";
import "../CSS/Feed.css";
import { useHistory } from "react-router-dom";

// const feedData = [
//   {
//     name: "kk1",
//     username: "kkk1",
//     description: "Theif in garden",
//     date: "2023-05-30",
//     time: "10:00 AM",
//     location: "New York",
//     type: "Event",
//     reportedDate: "12-04-2023",
//   },
//   {
//     name: "aa1",
//     username: "aaa1",
//     description: "some murder ig",
//     date: "2023-05-30",
//     time: "10:00 AM",
//     location: "New York",
//     type: "Event",
//     reportedDate: "12-04-2023",
//   },
//   // Add more objects to the array for additional feedboxes
// ];

// function Feed() {
//   return (
//     <div>
//       {/* <Navbar2 /> */}

//       <div className="col-lg-12">
//         {feedData.map((data, index) => (
//           <Feedbox
//             key={index}
//             name={data.name}
//             username={data.username}
//             description={data.description}
//             date={data.date}
//             time={data.time}
//             location={data.location}
//             Category={data.type}
//             reportedDate={data.reportedDate}
//           />
//         ))}
//       </div>

//       {/* <Footer2 /> */}
//     </div>
//   );
// }

// export default Feed;

function Feed() {
  const [reports, setReports] = useState([]);
  const history = useHistory();

  useEffect(() => {
    // Fetch reports from the backend
    axios
      .get("http://localhost:5000/api/feed")
      .then((response) => {
        setReports(response.data);
      })
      .catch((error) => {
        console.error("Error fetching reports:", error);
        history.push("/error");
      });
  }, []);

  return (
    <div>
      <div className="col-lg-12">
        {reports.map((data, index) => (
          <Feedbox
            key={index}
            title={data.title}
            description={data.description}
            date={data.date}
            time={data.time}
            area={data.area} // Update prop name to 'area'
            city={data.city} // Add city prop
            state={data.state} // Add state prop
            category={data.category}
          />
        ))}
        <Footer2 />
      </div>
    </div>
  );
}

export default Feed;
