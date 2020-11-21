import React from 'react';
import styled from 'styled-components';
import { Card, CardContent, Typography } from '@material-ui/core';

function InfoBox({ title, cases, total }) {
    return (
        <Div>
            <Card className="infoBox">
                <CardContent>
                    <Typography className="infoBox_title" color="textSecondary">
                        {title}
                    </Typography>

                  <h2 className="infoBox_cases">{cases}</h2>

                   <Typography className="infoBox_total" color="textSecondary">
                       {total} Total
                   </Typography>
                </CardContent>
            </Card>
            
        </Div>
    )
}

export default InfoBox;

const Div = styled.div`
`