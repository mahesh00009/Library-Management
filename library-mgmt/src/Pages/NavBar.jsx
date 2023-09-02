import React, { useMemo, useState } from 'react'


import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import LogoutIcon from '@mui/icons-material/Logout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useSelector, useDispatch } from "react-redux";
import { clearItems } from '../Redux/ActionTypes';

const NavBar = ({setCategoryClicked}) => {

    const navigate = useNavigate()
    const store = useSelector((store) => store.items)
    const dispatch = useDispatch()
    const [allUsers, setAllUsers] = useState([])

    const logoutClickHandler = () => {
        localStorage.removeItem("user")
        dispatch(clearItems())
        toast.success("Successfully Loggedout 😊")
        navigate("/login")
    }
   const categoryClickedHandler = () => {
      if(setCategoryClicked){
        setCategoryClicked("")
      } else{
        navigate("/")
      }
    }


  return <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{ backgroundColor: "#201d1d" }}>

            <Box sx={{display : "flex", alignItems : "center", gap : "20px"}}>
                <Link to = "/all-users" style = {{color : "white", textDecoration : "none"}}>Display All Users 🧑</Link>


                <Button variant='contained' endIcon = {< LogoutIcon/>} onClick={logoutClickHandler}>Logout</Button>
            </Box>

            <Box
              sx={{
                marginLeft: "auto",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                cursor: "poiner",
              }}
            >
              {
                <Button variant='contained' color = "primary"  startIcon={< ArrowBackIosIcon/> } onClick={categoryClickedHandler}>Go Back</Button>
              }

              <Link to="/cart" style = {{display: "flex", color : "white", gap : "10px", textDecoration: "none"}}>
                <ShoppingCartIcon sx={{ fontSize: "2.4rem" }} />
                <Typography variant="h6">{store.length} </Typography>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
        <ToastContainer
            position="top-center"
            autoClose={3000}     
      />
      </Box>
}

export default NavBar