import { AppBar, Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{console.log(res.data)
        setData(res.data)})
        
    },[])
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='' sx={{ textAlign:'center', borderRadius: '20px'}}>
        <Toolbar >
          <Typography variant="h6" sx={{ flexGrow: 1 }}>Employee Dashboard</Typography>
          <Link to={'/'}><Button color="inherit">Home</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>

    <TableContainer>
        <Table sx={{ minWidth: 650, border: '2px solid black' }} aria-label="simple table" >
        <TableHead>
            <TableRow sx={{border: '2px solid black', }}>
                <TableCell align="center" sx={{border: '2px solid black',fontWeight:'bold'}} >ID</TableCell>
                <TableCell align="center" sx={{border: '2px solid black',fontWeight:'bold'}}>Name</TableCell>
                <TableCell align="center" sx={{border: '2px solid black',fontWeight:'bold'}}>Email</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {data.map((item)=>(
            <TableRow>
                <TableCell align="center" sx={{border: '2px solid black'}}>{item.id}</TableCell>
                <TableCell align="center" sx={{border: '2px solid black'}}>{item.name}</TableCell>
                <TableCell align="center" sx={{border: '2px solid black'}}>{item.email}</TableCell>
            </TableRow>
        ))}
        </TableBody>
        </Table>
    </TableContainer>
    </div>
  )
}

export default Dashboard