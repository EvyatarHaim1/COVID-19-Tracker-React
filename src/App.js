import React, { useState, useEffect } from 'react';
import './App.css';
import { FormControl, MenuItem, Select, Card, CardContent } from '@material-ui/core';
import styled from 'styled-components';
import InfoBox from './components/InfoBox';
import Map from './components/Map';

function App() {
 
  const [countries, setCountries] = useState([]);
  const [country,setCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({});

  useEffect(() => {
   fetch("https://disease.sh/v3/covid-19/all")
      .then(response => response.json())
      .then(data => {
        setCountryInfo(data);
      });
  },[]);


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

   const onCountryChange = async (event) => {
     const countryCode = event.target.value; 
     setCountry(countryCode);

     const url = countryCode === 'worldwide' 
     ? 'https://disease.sh/v3/covid-19/all' 
     : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
      
      await fetch(url)
      .then(response => response.json())
      .then( data => {
        setCountry(countryCode);
        setCountryInfo(data);
      });
   };

   console.log(countryInfo)

  return (
    <Div className="App">
      <div className="app_left">
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

            <div className="app_stats">
              <InfoBox title="Coronavirus Cases" cases={countryInfo.todayCases} total={countryInfo.cases} />
              <InfoBox title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered} />
              <InfoBox title="Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths}  />
            </div>

            <Map />
            
    </div>
      <Card className="app_right">
          <CardContent>
              <h3>Live Cases By Country</h3>
              <h3>worldwide New Cases</h3>
          </CardContent>
      </Card>
    </Div>
  );
}

export default App;

const Div = styled.div`
display: flex;
justify-content: space-evenly;
padding: 20px;
.app_left{
  flex: 0.9;
}
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.app_stats{
  display: flex;
  justify-content: space-between;
}
`