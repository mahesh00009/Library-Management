import React, { useEffect, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LoginValidationSchema, SignupValidationSchema } from "../Datas/YupValidation";
import { Formik } from "formik"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./Login.css"
import { loginHandler, signupHandler } from "../Apis/LoginRequest";


const loginInitialValues = {
  email: "",
  password: "",
};

const signupInitialValues = {
  name: "",
  phone: "",
  password : "",
  email: "",
  address: "",
  college: "",
};
const Login = () => {

  const { pathname } = useLocation();
  const navigate = useNavigate()

  const formSignupHandler = async (e, values, errors) => {
    e.preventDefault();

    if(Object.keys(errors).length === 0){
      let response = await signupHandler(values)


      if(response?.data?.status === "success"){
        toast.success("User Registered Successfully 😊")
  
        setTimeout(() => {
          navigate('/login')
        }, (1000));
      } 

      else{
        toast.error("Something Went Wrong 🥺")
      }
    } else{
      toast.error("Validate Field Correctly 😧")
    }


  }
  const formLoginHandler = async(e, values,errors) => {
    e.preventDefault()

    if(Object.keys(errors).length === 0) {
      let response = await loginHandler(values)

      console.log(response?.data)
      
      if(response?.data?.status === "success"){
       toast.success("Successfully Loggedin 😊");
       localStorage.setItem("user", JSON.stringify(response?.data?.user))
   
       setTimeout(() => {
         navigate("/")
       }, 1500);
   
      } else {
       localStorage.removeItem("user")
       toast.error("Credentials Failed! Try Again 🥺")
      }
    } else{
      toast.error("Validate Field Correctly 😧")
    }

  }

  useEffect(() => {
    const user = localStorage.getItem("user")

    if(user){
      navigate("/")
    }
  }, [])

  return (
    <Box className = "mainContainer"

      sx={{
        height : `${pathname === "/login" ? "100vh" : "110vh"}`,
        width: "100vw",
        display: "flex",
        gap : "20px",
        alignItems: "center",
        padding : `${pathname !== "/login" ? "20px 0" : ""}`,
        borderTop: "15px solid #1e8bff",
        borderBottom: "10px solid #1e8bff",
      }}
    >
      <Box>
        <img
          src="https://www.skoolbeep.com/blog/wp-content/uploads/2020/12/WHAT-IS-THE-PURPOSE-OF-A-LIBRARY-MANAGEMENT-SYSTEM-min.png"
          className="image"
          alt=""
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flex: "1",
        }}
      >
        {pathname === "/login" ? (
          <Formik 
          initialValues={loginInitialValues}
          validationSchema={LoginValidationSchema}
          >
            {({ values, handleChange, handleBlur, touched, errors }) => {
              return (
                <form className="form" onSubmit={(e) => formLoginHandler(e, values, errors)}>
                  <Typography variant="h5"> Login Here </Typography>
                  <Box>
                    <TextField
                      required
                      label="Email"
                      name="email"
                      variant="outlined"
                      value={values.email}
                      style={{ width: "80%" }}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    { touched?.email && errors?.email && <Typography sx = {{color : "red"}}>{errors?.email}</Typography>}
                  </Box>

                  <Box>
                    <TextField
                      required
                      label="Password"
                      name="password"
                      type="password"
                      value = {values.password}
                      variant="outlined"
                      style={{ width: "80%" }}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    { touched?.password && errors?.password && <Typography sx={{color :"red"}}>{errors?.password}</Typography>}

                    </Box>
                    <Box sx={{ marginTop: "20px" }}>
                      <Typography variant="p">
                        {" "}
                        Don't have a Account ?{" "}
                        <Link to="/signup"> Create a New Account</Link>
                      </Typography>{" "}
                    </Box>

                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      sx={{ marginTop: "10px", width: "80%" }}
                    >
                      Login
                    </Button>
                </form>
              );
            }}
          </Formik>
        ) : (
          <Formik 
          initialValues={signupInitialValues}
          validationSchema={SignupValidationSchema}
          >
            {(
              {
                values,
                handleBlur,
                handleChange,
                touched, 
                errors
              }
            ) => {
              return (
                <form className="form" onSubmit={(e) => formSignupHandler(e, values, errors)}>
                  <Typography variant="h5"> Signup</Typography>

                  <Box>
                    <TextField
                      required
                      label="Name"
                      name = "name"
                      value={values.name}
                      variant="outlined"
                      style={{ width: "80%" }}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />

                  { touched?.name && errors?.name && <Typography sx={{color :"red"}}>{errors?.name}</Typography>}

                  </Box>

                  <Box>
                    <TextField
                      required
                      label="Phone"
                      name = "phone"
                      value = {values.phone}
                      variant="outlined"
                      style={{ width: "80%" }}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

{ touched?.phone && errors?.phone && <Typography sx={{color :"red"}}>{errors?.phone}</Typography>}

                  </Box>

                  
                  <Box>
                    <TextField
                      required
                      label="Password"
                      type= "password"
                      value = {values.password}
                      variant="outlined"
                      name = "password"
                      style={{ width: "80%" }}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

{ touched?.password && errors?.password && <Typography sx={{color :"red"}}>{errors?.password}</Typography>}

                  </Box>

                  <Box>
                    <TextField
                      required
                      label="Email"
                      name = "email"
                      value = {values.email}
                      variant="outlined"
                      style={{ width: "80%" }}
                      onChange={handleChange}
                      onBlur={handleBlur}


                    />

{ touched?.email && errors?.email && <Typography sx={{color :"red"}}>{errors?.email}</Typography>}

                  </Box>

                  <Box>
                    <TextField
                      required
                      label="Address"
                      name = "address"
                      value = {values.address}
                      variant="outlined"
                      style={{ width: "80%" }}
                      onChange={handleChange}
                      onBlur={handleBlur}


                    />

{ touched?.address && errors?.address && <Typography sx={{color :"red"}}>{errors?.address}</Typography>}

                  </Box>

                  <Box>
                    <TextField
                      required
                      label="College"
                      name = "college"
                      value = {values.college}
                      variant="outlined"
                      style={{ width: "80%" }}
                      onChange={handleChange}
                      onBlur={handleBlur}


                    />

{ touched?.college && errors?.college && <Typography sx={{color :"red"}}>{errors?.college}</Typography>}

                  </Box>

                  <Box sx={{ marginTop: "20px" }}>
                    <Typography variant="p">
                      {" "}
                      Already have an account ?{" "}
                      <Link to="/login"> Login here</Link>
                    </Typography>{" "}
                  </Box>

                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ marginTop: "10px", width: "80%" }}
                  >
                    Signup
                  </Button>
                </form>
              );
            }}
          </Formik>
        )}
      </Box>
      <ToastContainer
            position="top-center"
            autoClose={3000}     
      />
    </Box>
  );
};

export default Login;
