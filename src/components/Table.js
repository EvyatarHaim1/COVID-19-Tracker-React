import React from 'react';
import styled from 'styled-components';
import numeral from "numeral";

function Table({ countries }) {
  return (
    <Div>
      {countries.map((country, cases) => (
        <tr>
          <td>{country.country}</td>
          <td>
            <strong>{numeral(country.cases).format("0,0")}</strong>
          </td>
        </tr>
      ))}
    </Div>
  );
}

export default Table;


const Div = styled.div`
margin-top: 20px;
overflow: scroll;
height: 400px;
color: #6a5d5d;

tr{
    display: flex;
    justify-content: space-between;
}

tr > td{
    padding: 0.5rem;
}

tr:nth-of-type(odd){
    background-color: #f3f2f8;
}
`