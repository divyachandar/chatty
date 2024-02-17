import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import ChatBox from "./pages/ChatBox";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Registration/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<ChatBox/>}/>
       
       </Routes>
    </BrowserRouter>

  );
}

 