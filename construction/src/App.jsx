import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserLayout from './Components/Layout/UserLayout';
import { Toaster } from 'sonner';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';


const App = () => {
  return (
    <>
      <Toaster position='top-right'/>
        <Routes>
            <Route path="/" element={<UserLayout />}>
              <Route index element={<Home />}/>
            </Route>
              <Route path="/profile" element={<Login />}/>
              <Route path="/register" element={<Register />}/>
              
            

            <Route>
              {/* Admin Layout */}
              </Route>
        </Routes>
    </>
    
    
      
  );
};

export default App
