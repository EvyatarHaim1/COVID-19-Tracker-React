import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import styled from 'styled-components';

function InfoBox({ title, cases, total, active, isRed, ...props }) {
  console.log(title, active);
  return (
<Div>
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox-selected"} ${
        isRed && "infoBox-red"
      }`}
    >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <h2 className={`infoBox_cases ${!isRed && "infoBox_cases-green"}`}>
          {cases}
        </h2>

        <Typography className="infoBox_total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
</Div>
  );
}

export default InfoBox;

const Div = styled.div`
flex: 1;
:not(:last-child){
    margin-right: 10px;
}
.infoBox_cases{
    color: #cc1034;
    font-weight: 600;
    font-size: 1.75rem;
    margin-bottom: 0.5rem;
}

.infoBox_total{
    color: #6c757d;
    font-weight: 700 !important;
    font-size: 0.8rem !important;
    margin-top: 15px !important;
}

.infoBox-selected {
    border-top: 10px solid greenyellow;
  }
  
  .infoBox-red {
    border-color: red;
  }
  
  .infoBox_cases-green {
    color: lightgreen !important;
  }
`

  
  
