import React, {useState} from 'react';
import './App.css';
import { FormControl, MenuItem, Select } from '@material-ui/core';
import styled from 'styled-components';

function App() {
 
  const [countries, setCountries] = useState(['USA', 'UK', 'INDIA']);

  return (
    <Div className="App">
      <div className="header">
      <h1>COVID-19 TRACKER</h1>
      <FormControl className="app_dropdown">
        <Select
           variant="outlined"
           value="abc"
           >
             {countries.map(country => (
            <MenuItem value={country}>{country}</MenuItem>
             ))}
             {/*
             <MenuItem value="worldwide">WorldWide</MenuItem>
             <MenuItem value="worldwide">WorldWide</MenuItem>
             <MenuItem value="worldwide">WorldWide</MenuItem> */}
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