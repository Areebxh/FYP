import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from './auth/Login'
import Register from './auth/Register';
import EmailActivation from './auth/EmailActivation';
import ForgotPassword from './auth/ForgotPassword';
import ResetPassword from './auth/ResetPassword';
import Profile from './profile/Profile';
import Main from './auth/MainScreen';



function Body() {
    return (
        <section>
        <Routes>
            <Route path="/main" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/user/activate/:activation_token" element={<EmailActivation />} />
            <Route path="/forgot" element={<ForgotPassword />} />
            <Route path="/user/reset/:token" element={<ResetPassword />} />
            <Route path="/profile" element={<Profile />} />



        </Routes>
        </section>
    )
}

export default Body
