import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Auth from './pages/auth';
import Profile from './pages/profile/Profile';
import Chat from './pages/chat';

const App = () => {
  return (
      <Routes>
        <Route path='/auth' element={<Auth />} />
        <Route path='/chat' element={ <Chat/>  } />
        <Route path='/profile' element={ <Profile/> } />
        <Route path='*' element={<Navigate to="/auth" />} />
      </Routes>
  );
};

export default App;
