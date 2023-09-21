import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../componants/Gestion.css";
import axios from "axios";

function Testuser() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);

  const upUsers = () => {
    axios.get("http://localhost:3000/userss").then((res) => {
      setUsers(res.data.reverse());
    });
  };

  useEffect(() => {
    upUsers();
  }, []);

  function Delete(id) {
    axios.delete(`http://localhost:3000/userss/${id}`).then(upUsers);
  }

  // Get current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="divparent">
      <div className="">
        <Link
          className="butt1"
          class="btn btn-outline-primary btn-lg btn-block"
          style={{ width: "1230px", height: "60px" }}
          to="/AddUser"
        >
          ADD Users
        </Link>
        <br></br>
        <br></br>
        <table className="table table-striped" style={{ width: "" }}>
          <thead>
            <tr>
              <th className="text-white" style={{ padding: "15px" }}>
                ID
              </th>

              <th
                className=" text-white"
                style={{ padding: "15px" }}
                scope="col"
              >
                Username{" "}
              </th>
              <th
                className=" text-white"
                style={{ padding: "15px" }}
                scope="col"
              >
                Password
              </th>
              <th className=" text-white" style={{ padding: "15px" }}></th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((data, index) => (
              <tr key={index}>
                <td>{data.id}</td>
                <td>{data.username}</td>
                <td>{data.password}</td>
                <td>
                  <Link to={`edit-user/${data.id}`} class="btn btn-light">
                    Edit
                  </Link>

                  <button
                    onClick={() => Delete(data.id)}
                    class="btn btn-light"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
           <th colSpan={4}>
            <div className="divpgn">
           
          <button
            className="btn btn-secondary mr-2"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className="btn btn-secondary  btn22"
            onClick={() => paginate(currentPage + 1)}
            disabled={currentUsers.length < usersPerPage}
          >
            Next
          </button>
        </div>
        </th>
        </tbody>
        </table>
        
      </div>
    </div>
  );
}
export default Testuser;
