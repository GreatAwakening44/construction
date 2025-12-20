import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserLayout from './Components/Layout/UserLayout';
import Home from './Pages/Home';


const App = () => {
  return (
      <Routes>
        <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />}/>
        </Route>

        <Route>
          {/* Admin Layout */}
          </Route>
      </Routes>
  );
};

export default App
