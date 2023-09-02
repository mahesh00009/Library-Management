import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NavBar from "./NavBar";


const Cart = ({setCategoryClicked = null}) => {
  const store = useSelector((store) => store.items);

  console.log(setCategoryClicked)
  return (
    <Box>
        <NavBar/>
        <Typography variant="h3" sx = {{textAlign: "center" , margin : "20px 0"}}> Cart Items</Typography>

    { store.length > 0 ?

    <Box sx={{ display: "flex", gap : "40px", flexWrap :"wrap", justifyContent: "center"}}>
      {store.map((item, index) => {
        return (
          <Box key={index} sx={{ display: "flex" , flexDirection: "column", alignItems: "center" }}>

            <img src={item.Book_Url} width={200} height={300}></img>
            <Box>
              <Typography > Name : {item.Book_Name}</Typography>

              <Typography sx={{backgroundColor: "yellow"}}> Category : {item.category}</Typography>
            </Box>
          </Box>
        );
      })}
      </Box>

      :  <Typography variant="h3" sx = {{ textAlign : "center", backgroundColor : "yellow"}}> oops! Nothing in cart 🥺 <Link to = "/"> Click to add items</Link> </Typography>
    }
    </Box>
  );
};

export default Cart;
