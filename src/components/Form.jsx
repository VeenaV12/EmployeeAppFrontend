import { Box, Button, MenuItem, Stack, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import Home from './Home';

const position = [
    {
      label: 'Inspector'
    },
    {
      label: 'Sub-Inspector'
    },
    {
      label: 'Senior CPO'
    },
    {
      label: 'CPO'
    }
  ];

const Form = () => {
  return (
    <div>
        
        <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 2, width: '25ch'},
           color: 'Grey',
           padding: '25px',
           border: 3 ,
           mx: 'auto', maxWidth:600,
           margin:'75px 400px ',
           alignContent:'center',
           backgroundColor:'ghostwhite'
        }}
        >
        <h2 style={{textAlign:'center'}}>EMPLOYEE FORM</h2><hr />
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField
          select
          label="Position"
          defaultValue="Inspector"
          helperText="Please select your position"
        >
          {position.map((option) => (
            <MenuItem>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-multiline-flexible"
          label="Location"
          multiline
          maxRows={4}
        />
        <TextField id="outlined-basic" label="Salary" variant="outlined" />
        <Stack direction="row"  justifyContent="center"alignItems="center" spacing={2}>
        <Button variant="contained" >Submit</Button>
        <Button variant="contained">Cancel</Button>
        <Link to={'/'}><Button variant="contained">Home</Button></Link>
        </Stack>
        </Box>
    </div>
  )
}

export default Form