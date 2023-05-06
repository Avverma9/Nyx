import React, { useEffect, useState } from 'react';
import './GetLedger.css';
import { useLocation } from 'react-router-dom';

const GetLedger = () => {
  const location = useLocation();
  const [records, setRecords] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (location.pathname === '/get') {
      fetchData();
    }
  }, [location]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://nyx-k51u.onrender.com/api/records');
      const data = await response.json();
      setRecords(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredRecords = records.filter((record) => {
    const name = record.name.toLowerCase();
    const query = searchQuery.toLowerCase();
    return name.includes(query);
  });

  return (
    <div className="ledger-container">
      {location.pathname === '/get' && (
        <div className="search-container">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search by name"
          />
        </div>
      )}
      {filteredRecords.map((record) => (
        <div key={record.id} className="card">
          <img className="card-image" src={record.images} alt={record.name} />
          <h3 className="card-title">{record.name}</h3>
          <p className="card-info">Email: {record.email}</p>
          <p className="card-info">Mobile: {record.mobile}</p>
          <p className="card-info">Description: {record.description}</p>
        </div>
      ))}
    </div>
  );
};

export default GetLedger;
