import React ,{useState,useEffect} from "react";
//import {BrowserRouter as Router} from 'react-router-dom'
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Chatbot from "./components/app components/chatbot";
import SideBar from "./components/app components/AdminSideBar";
import AdminHome from "./components/app components/AdminHome";



function App() {
 
  
  return (

    <div className="App">
      <Header/>
      <Body/>
      <Chatbot/>
      <SideBar/>
      <AdminHome/>
     
    </div>
  );
}

export default App;
