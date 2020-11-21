import React from 'react';

function Table({ countries }) {
    return (
        <div>
           { countries.map(({country, cases}) => (
               <tr>
                   <td>{country}</td>
                   <td> <strong>{cases}</strong> </td>
               </tr>
           ))}
        </div>
    )
}

export default Table;
