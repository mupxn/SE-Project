import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import { useState } from "react";
import Axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}
  
    

const data = [
  createData(undefined, 0),
  createData('', 10),
  createData('', 30),
  createData('', 50), 
  createData('', 70),
  createData('', 90),
  
  createData(undefined, undefined),
];

export default function Chart() {
    const myStyle2 = {
    fontFamily: "Sans-Serif",
    padding : "40px"
  };
  const theme = useTheme();
  const [datastatic, setstatic] = useState([]);
  Axios.get("http://localhost:3333/static").then((response) => {
    setstatic(response.data);
    });
   
    
  return (
    <React.Fragment>
     Month
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Sales ($)
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
      {datastatic.map((val) => {
                    return (
                      <div style={myStyle2} >
                        <text style={myStyle2} > Menu: {val.menu_name}</text>
                        <text style={myStyle2} > amount : {val.amount } </text>
                        <br></br><br></br>
                            </div>
                        );
                                
                    })}
    </React.Fragment>
    
  );
}