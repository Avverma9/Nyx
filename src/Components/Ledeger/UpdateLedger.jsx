import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import './UpdateLedger.css'

function UpdateLedger() {
  const location = useLocation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState("");
  const [response, setResponse] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("mobile", mobile);
    formData.append("description", description);
    formData.append("images", images);

    axios
      .put(`https://nyx-k51u.onrender.com/api/update/${name}`, formData)
      .then((res) => {
        console.log(res);
        setResponse(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  if (location.pathname !== '/update') {
    return null;
  }

  return (
    <div className="update-ledger-container">
      <h2>Update Details</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Find By Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <h3>Update Below Details</h3>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Mobile Number:
          <input
            type="text"
            name="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <label>
          Student Image:
          <input
            type="file"
            name="images"
            onChange={(e) => setImages(e.target.files[0])}
          />
        </label>
        <br />
        <button type="submit">Update</button>
      </form>

      {response && (
        <div>
          <h2>Record Updated Successfully</h2>
          <div>
            <h3>Student Name: {response.name}</h3>
            <p>Email: {response.email}</p>
            <p>Mobile Number: {response.mobile}</p>
            <p>Description: {response.description}</p>
            {response.images && (
              <img src={response.images} alt="Student" />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default UpdateLedger;
