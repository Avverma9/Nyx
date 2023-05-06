import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import './DeleteLedger.css'; // Import the CSS file

const DeleteLedger = () => {
  const location = useLocation();
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`https://nyx-k51u.onrender.com/api/records/${name}`);
      if (response.data.error) {
        setMessage(response.data.error);
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error('Error deleting record:', error);
      setMessage('Data not found 404.');
    }
  };

  if (location.pathname !== '/delete') {
    return null;
  }

  return (
    <div className="delete-container"> {/* Apply the CSS styles using the className */}
      <h2>Write Your Student Name to Delete their data</h2>
      <div>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
      </div>
      <button onClick={handleDelete}>Delete</button>
      <h3>{message}</h3>
    </div>
  );
};

export default DeleteLedger;
