import logo from './logo.svg';
import './App.css';
import Signup from './Pages/Login';
import Login from './Pages/Login';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Cart from './Pages/Cart';
import { useState } from 'react';
import AllUsers from './Pages/AllUsers';

import { useNavigate } from 'react-router-dom'; // Import the navigate hook

function App() {
  const user = localStorage.getItem("user");
  const navigate = useNavigate(); 

  const isAuthenticated = () => {
    return !!user; 
  };

  return (
    <div className="App">
      <Routes>
        <Route index element={<Dashboard />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {isAuthenticated() ? (
          <>
            <Route path="/cart" element={<Cart />} />
            <Route path="/all-users" element={<AllUsers />} />
          </>
        ) : null}

        <Route path="*" element={<h1>404 [Page Not Found 😭😭😭]</h1>} />
      </Routes>
    </div>
  );
}

export default App;
