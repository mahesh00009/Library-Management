import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { decrementItem, incrementItem, removeItem } from "../Redux/ActionTypes";

const Cart = ({ setCategoryClicked = null }) => {

  const store = useSelector((store) => store.items);
  const dispatch = useDispatch();


  const incrementItemHandler = (id) => {
  console.log(store)

    dispatch(incrementItem(id))
  }

  const decrementItemHandler = (id) => {

    dispatch(decrementItem(id))
  }

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
              flexGrow: 3 
            }}
          >
            {store.map((item, index) => {
              return (
                <Box key={index} sx={{ display: "flex", 
                alignItems: "center" , 
                gap : "20px",
                 width: "700px",
                 boxShadow : "12px 0 30px gray"

                 
                 }}>
                  <img src={item.Book_Url} width={200} height={300}></img>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                      width: "350px", 
                      padding: "20px 30px",
                      boxShadow: "5px 5px 20px gray"
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

                    <Typography>Total Price : $ {item.totalPrice}</Typography>

                    

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
                      <Typography variant="h6" sx={{ cursor : "pointer", padding : "0 30px"}} onClick = {() => decrementItemHandler(item.id)}> - </Typography>

                      <Typography variant="h5">{item.totalItem}</Typography>

                      <Typography variant="h6" sx = {{ cursor : "pointer" , padding : "0 30px"}} onClick ={() => incrementItemHandler(item.id)}> + </Typography>
                    </Box>

                    <Button variant = "contained" color="error" onClick={() => dispatch(removeItem(item.id))}>Delete Item</Button>   

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

              Total Items in Cart : {store.map((item) => item.totalItem).reduce((acc, elem) => acc + Number(elem), 0)}

            </Typography>

            <Typography variant="h5" >Grand Total : $ {store.map((item) => item.totalPrice).reduce((acc, elem) => acc + Number(elem), 0)} </Typography>

          </Box>
        </Box>
      ) : (
        <Typography
          variant="h3"
          sx={{ textAlign: "center", backgroundColor: "yellow" }}
        >
          oops! Nothing in cart 🥺 <Link to="/"> Click to add items</Link>{" "}
        </Typography>
      )}
    </Box>
  );
};

export default Cart;
