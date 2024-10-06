import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './index.css'


const App = () => {
  const [P, setP] = useState(0)
  const [T, setT] = useState(0)
  const [R, setR] = useState(0)
  const [SI, setSI] = useState(0)
  

  const CalculateInterest =() => {
    setSI(P*T*R/100)
  }

  return (
    <div className='div'>
       <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 } }>
          
          Simple Intereset
          </Typography>
        </Toolbar>
      </AppBar>
      <br/>
      <br/>
      <TextField onChange={(event)=> setP(event.target.value)} id="outlined-basic" label="Enter P" variant="outlined" /><br/><br/>
      <TextField onChange={(event)=> setT(event.target.value)} id="outlined-basic" label="Enter T" variant="outlined" /><br/><br/>
      <TextField onChange={(event)=> setR(event.target.value)} id="outlined-basic" label="Enter R" variant="outlined" /><br/><br/>
     <br/>
      <Button onClick={()=> CalculateInterest()} variant='contained'>Calculate</Button>
      <Typography variant="h6" gutterBottom>
        Simple INterest Is : {SI}
      </Typography>
    </div>
  );
}

export default App;
