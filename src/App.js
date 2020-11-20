import React, { useState, useEffect } from 'react';
import './App.css';
import { FormControl, MenuItem, Select } from '@material-ui/core';
import styled from 'styled-components';

function App() {
 
  const [countries, setCountries] = useState([]);
  const [country,setCountry] = useState('worldwide');

   useEffect(() => {
     const getCountriesData = async() => {
       await fetch("https://disease.sh/v3/covid-19/countries")
       .then((response) => response.json())
       .then((data) => {
         const countries = data.map((country) => (
           {
             name: country.country,
             value: country.countryInfo.iso2,
           }));
           setCountries(countries);
       });
     };

     getCountriesData();
   }, []);

   const onCountryChange = (event) => {
     const countryCode = event.target.value; 
     setCountry(countryCode);
   }

  return (
    <Div className="App">
      <div className="header">
      <h1>COVID-19 TRACKER</h1>
      <FormControl className="app_dropdown">
        <Select
           onChange={onCountryChange}
           variant="outlined"
           value={country}
           >
             <MenuItem value="worldwide">Worlwide</MenuItem>
             {countries.map(country => (
            <MenuItem value={country.value}>{country.name}</MenuItem>
             ))}
            
             
           </Select>
      </FormControl>
      </div>
    </Div>
  );
}

export default App;

const Div = styled.div`
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
`