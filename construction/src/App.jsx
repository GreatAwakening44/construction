import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserLayout from './Components/Layout/UserLayout';


const App = () => {
  return (
      <Routes>
        <Route path="/" element={<UserLayout />}>
        {/* User Layout */}
        </Route>

        <Route>
          {/* Admin Layout */}
          </Route>
      </Routes>
  );
};

export default App
