import React ,{useState,useEffect} from "react";
//import {BrowserRouter as Router} from 'react-router-dom'
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Chatbot from "./components/app components/chatbot";
import SideBar from "./components/app components/AdminSideBar";
import AdminHome from "./components/app components/AdminHome";
import ListingApproval from "./components/app components/ListingApproval";
import Terms from "./components/app components/Terms";
import UserManage from "./components/app components/UserManage";
import HostelManage from "./components/app components/HostelManage";


function App() {
 
  
  return (

    <div className="App">
      {/* <Header/>
      <Body/> */}
      {/* <ListingApproval/> 
      <Terms/> */}
      {/* <UserManage/>
      <HostelManage/> */}
      {/* <Chatbot/>
      <SideBar/>
      <AdminHome/> */}
      <SideBar/>
     
    </div>
  );
}

export default App;
