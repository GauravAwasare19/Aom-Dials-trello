import React,{ useState } from 'react'
import { Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Header';
import Login from './Login';
import Signup from './Signup';
import App from './App';

function Main1() {
    return (
        <>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/app" element={<App />} />
            <Route path="/" element={<Signup />} />
        </Routes>
        </>
    )
}
export default Main1;