import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NavBar from "./NavBar";

const Cart = ({ setCategoryClicked = null }) => {
  const store = useSelector((store) => store.items);

  console.log(setCategoryClicked);
  return (
    <Box>
      <NavBar />
      <Typography variant="h3" sx={{ textAlign: "center", position: "sticky", top : "0", backgroundColor: "black", color:"white" , zIndex: "1"}}>
        {" "}
        Cart Items
      </Typography>

      {store.length > 0 ? (
        <Box sx={{ display: "flex", padding: "30px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              flexWrap: "wrap",
              flexGrow: 3            }}
          >
            {store.map((item, index) => {
              return (
                <Box key={index} sx={{ display: "flex", alignItems: "center" , gap : "20px", width: "600px"}}>
                  <img src={item.Book_Url} width={200} height={300}></img>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                    }}
                  >
                    <Typography variant="h5">
                      {" "}
                      Name : {item.Book_Name}
                    </Typography>

                    <Typography sx={{ backgroundColor: "yellow" }}>
                      {" "}
                      Category : {item.category}
                    </Typography>

                    <Typography>Price : $ {item.price}</Typography>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        backgroundColor: "#2d2b2bda",
                        borderRadius: "5px",
                        color: "white",
                      }}
                    >
                      <Typography variant="h6"> - </Typography>
                      <Typography variant="h5">{1}</Typography>
                      <Typography variant="h6"> + </Typography>
                    </Box>

                    <Button variant = "contained" color="error">Delete Item</Button>

                  </Box>
                </Box>
              );
            })}
          </Box>
          <Box
            sx={{ flexGrow: 1, height: "300px", backgroundColor: "#4ac1c5", color:"white", padding: "30px", borderRadius: "20px", position: "sticky", top : "80px"}}
          >
            <Typography variant="h4">Total</Typography>
            <Typography variant="h5">
              Total Items in Cart : {store.length}
            </Typography>

            <Typography variant="h5" >Grand Total : $ {store.map((item) => item.price).reduce((acc, elem) => acc + Number(elem), 0)} </Typography>
          </Box>
        </Box>
      ) : (
        <Typography
          variant="h3"
          sx={{ textAlign: "center", backgroundColor: "yellow" }}
        >
          {" "}
          oops! Nothing in cart 🥺 <Link to="/"> Click to add items</Link>{" "}
        </Typography>
      )}
    </Box>
  );
};

export default Cart;
