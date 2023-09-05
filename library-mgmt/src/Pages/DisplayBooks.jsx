import React from "react";
import { Books } from "../Datas/Books";
import { Box, Button, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../Redux/ActionTypes";
import { ToastContainer, toast } from 'react-toastify';

const DisplayBooks = ({ elem }) => {
  const FilteredBooks = Books.filter((item) => item.category === elem);
  const dispatch = useDispatch()

  const store = useSelector((store) => store.items)

  const addToCartHandler = (elem) => {
    dispatch(addItem(elem))
    toast.success("Added to Cart 🛒")
  }

  console.log(store)
  return (
    <Box
      sx={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "50px",
        width: "100vw",
        alignItems: "center",
      }}
    >
      <Typography variant="h3">{elem} Books</Typography>

      <Box sx={{ display: "flex", gap: "20px" , justifyContent:"center",     flexWrap: "wrap",
}}>
        {FilteredBooks.map((elem, i) => {
          return (
            <Box key = {i} sx={{ display: "flex", flexDirection: "column" }}>
              <img src={elem.Book_Url} width={270} height={400} alt="" />

              <Typography>{`Price : $${elem.price}`}</Typography>
              <Button variant="contained" color="primary" onClick={addToCartHandler.bind(this, elem)} disabled ={store.map((book, id) => book.id).includes(elem.id)} >

                {store.map((book, id) => book.id).includes(elem.id) ? "Added To Cart" : "Add To Cart"}
              </Button>
            </Box>
          );
        })}
      </Box>
      <ToastContainer
       position = "top-center"
       autoClose  = {1500}
       />
    </Box>
  );
};

export default DisplayBooks;
