import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DisplayBooks from "./DisplayBooks";
import { useSelector } from "react-redux";
import NavBar from "./NavBar";


const Dashboard = ({categoryState}) => {
  const navigate = useNavigate();
  const store = useSelector((state) => state.items)

  const BookCategories = ["Sci-Fi", "Fiction", "Comedy"];
  const [categoryClicked, setCategoryClicked] = useState("");

  const bookClickHandler = (elem) => {
    setCategoryClicked(elem);
       
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/login");
    }
  }, []);
  
  return (
    <Box sx={{ display: "flex", flexDirection: "column"}}>
      <NavBar setCategoryClicked = {setCategoryClicked}/>

      {!categoryClicked ? (
        <>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            {" "}
            Book Categories{" "}
          </Typography>
          <Box sx={{ display: "flex", gap: "40px", justifyContent : "center" , marginTop: "50px", flexWrap : "wrap"}}>

            {BookCategories.map((elem, index) => (
              <Box
                key={index}
                sx={{
                  height: "300px",
                  cursor: "pointer",
                  width: "300px",
                  backgroundColor: "#212121",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "0.3s ease",

                  "&:hover": {
                    color: "gray",
                  },
                }             
              }
              onClick={bookClickHandler.bind(this, elem)}

              >
                <Typography
                  variant="h3"
                  sx={{ textAlign: "center" }}
                  
                >
                  {elem}
                </Typography>

                <ArrowForwardIcon />
              </Box>
            ))}
          </Box>
        </>
      ) : (
        <DisplayBooks elem={categoryClicked}  setCategoryClicked = {setCategoryClicked}/>
      )}
    </Box>
  );
};

export default Dashboard;
