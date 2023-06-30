
import React, { useState } from 'react';
import './search.css';
import logoutimg from './logoutimg.png';
import bg from './bg.jpeg';

const Search = ({ onSearchChange }) => {
  const [searchType, setSearchType] = useState('latlon');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [location, setLocation] = useState('');

  const handleSearchTypeChange = (event) => {
    setSearchType(event.target.value);
    setLatitude('');
    setLongitude('');
    setLocation('');
  };

  const handleLatitudeChange = (event) => {
    setLatitude(event.target.value);
  };

  const handleLongitudeChange = (event) => {
    setLongitude(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchType === 'latlon') {
      onSearchChange({ latitude, longitude });
    } else if (searchType === 'location') {
      onSearchChange({ location });
    }
  };
   
  const handleLogout = () => {
    // Perform logout logic here
    // This could include clearing user session, redirecting, etc.
    window.location.href = 'https://weather-app-task-intern.onrender.com/';
    console.log('User logged out');
  };
  

  return (

    <>
    {/* <div className="containerbg">
    <img
    src={bg}
    
  />


    </div> */}
    <>
    <img
        src={logoutimg}
        alt="Logout"
        className="logout-image"
        onClick={handleLogout}
      />
    </>
    <>
    <form onSubmit={handleSubmit}>
      <div className="search-type">
        <label>
          <input
            type="radio"
            name="searchType"
            value="latlon"
            checked={searchType === 'latlon'}
            onChange={handleSearchTypeChange}
          />
          Latitude / Longitude:
        </label>
        <div className="coordinates">
          <input
            class="box"
            type="text"
            value={latitude}
            placeholder="Latitude"
            onChange={handleLatitudeChange}
            disabled={searchType !== 'latlon'}
          />
          <input
            type="text"
            value={longitude}
            placeholder="Longitude"
            onChange={handleLongitudeChange}
            disabled={searchType !== 'latlon'}
          />
        </div>
      </div>
      <div className="search-type">
        <label>
          <input
            type="radio"
            name="searchType"
            value="location"
            checked={searchType === 'location'}
            onChange={handleSearchTypeChange}
          />
          Location Name:
        </label>
        <input
          // style={{ marginLeft: '10px'} }
          class = "boxfld"
          type="text"
          value={location}
          placeholder="Location"
          onChange={handleLocationChange}
          disabled={searchType !== 'location'}
        />
      </div>
      <button type="submit">Search</button>
    </form>
    </>
  </>
  );
};

export default Search;
