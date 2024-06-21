
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='' style={{ borderRadius: '20px' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
          <Link to={'/dashboard'}><Button color="inherit">Employee DashBoard</Button></Link>
          <Link to={'/form'}><Button color="inherit">Employee Form</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Home