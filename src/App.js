import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./component/login/login";
import { Home } from "./component/home/home";
import { AddTask } from "./component/addTask/addTask";
import { MyTask } from "./component/myTask/myTask";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/addTask" element={<AddTask />} />
          <Route path="/myTask" element={<MyTask />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
