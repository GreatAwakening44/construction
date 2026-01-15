import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserLayout from './Components/Layout/UserLayout';
import { Toaster } from 'sonner';
import Home from './Pages/Home';


const App = () => {
  return (
    <>
      <Toaster position='top-right'/>
        <Routes>
            <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />}/>
            </Route>

            <Route>
              {/* Admin Layout */}
              </Route>
        </Routes>
    </>
    
    
      
  );
};

export default App
