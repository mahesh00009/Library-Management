


import React, { useEffect, useState } from 'react'
import { getAllUser } from '../Apis/LoginRequest'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import NavBar from './NavBar';


const AllUsers = () => {
const [allUsers, setAllUsers] = useState([])
useEffect(() => {
    const fetchUsers = async() => {
    try{
        const response = await getAllUser()
        setAllUsers(response?.data?.users)
    } catch(e) {
        console.log("Something went wrong", e)
    }
    } 
    fetchUsers()

}, [])
console.log(allUsers)
  return (
    <>
    <NavBar/>
    <TableContainer component={Paper}>
                <Typography variant='h5' sx={{textAlign:"center"}}>User Details</Typography>

      <Table sx={{ minWidth: 750, maxWidth: 1000, margin: "auto" }} >
        
        <TableHead >
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell  align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">College</TableCell>
            <TableCell align="right">Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allUsers.map((data) => (
            <TableRow
              key={data.name}
              sx={{ color : "pink"}}
            >
              <TableCell component="th" scope="row">
                {data.name}
              </TableCell>
              <TableCell align="right">{data.email}</TableCell>
              <TableCell align="right">{data.phone}</TableCell>
              <TableCell align="right">{data.college}</TableCell>
              <TableCell align="right">{data.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
export default AllUsers