import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { history } from './utilities/history';
import { DisplayContextProvider } from './ai/Display/DisplayContext';
import { SettingsContextProvider } from './ai/Settings/SettingsContext';

import Dashboard from './pages/Dashboard';
import Lessons from './pages/Lessons';
import PageNotFound from './pages/PageNotFound';
import Register from './pages/Register';
import Login from './pages/Login';


const RedirectSite = () => {
  window.location.href = "https://codenest-academe.onrender.com/";
  return <></>;
};

export default function App() {
  if (history.location.pathname === '/') {
    history.push('/dashboard');
    history.go(0);
  }
  return (
    <BrowserRouter>
      <DisplayContextProvider>
        <SettingsContextProvider>
          <Routes>
            <Route path={'dashboard'} element={<Dashboard />} />
            <Route path={'lessons'} element={<Lessons />} />
            <Route path={'register'} element={<Register />} />
            <Route path={'login'} element={<Login />} />
            <Route path="/quizes" element={<RedirectSite />} />
            <Route path={'*'} element={<PageNotFound />} />
          </Routes>
        </SettingsContextProvider>
      </DisplayContextProvider>
    </BrowserRouter>
  );
}
