import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './app.scss'

function App() {
    const [userData, setUserData] = useState([]);
    const [genderFilter, setGenderFilter] = useState('');
    const [countryFilter, setCountryFilter] = useState('');

    useEffect(() => {
        const apiUrl = `https://randomuser.me/api/?results=10${genderFilter ? `&gender=${genderFilter}` : ''}${countryFilter ? `&nat=${countryFilter}` : ''}`;
      
        axios.get(apiUrl)
          .then(response => {
            setUserData(response.data.results);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, [genderFilter, countryFilter]);
return(
        <div className="body-style">
            
      <h1>Random User Generator</h1>
        <div className='inputs'>
          <div className="inputDiv">
            <label htmlFor="genderFilter">Select Gender: </label>
            <select id="genderFilter" onChange={(e) => setGenderFilter(e.target.value)}>
                <option value="">All</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
          </div>
          <div className="inputDiv">
            <label htmlFor="countryFilter">Select Country: </label>
            <select id="countryFilter" onChange={(e) => setCountryFilter(e.target.value)}>
                <option value="">All</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
            </select>
          </div>
        </div>

        <div className='userBlock'>
        {userData.map(user => (
          <div className="personCard" key={user.login.uuid}>
            <div>
              <img src={user.picture.large} alt="User Thumbnail" />
            </div>
            <p>{`${user.name.first} ${user.name.last}`}</p>
            <p>Email: {user.email}</p>
            <p>Age: {user.dob.age}</p>
            <p>Phone: {user.phone}</p>
          </div>
        ))}
      </div>

      <p className='footer'><b>HerExcellencyrx TechTide 2023</b></p>
</div>

)      


}
export default App;