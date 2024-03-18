import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import App from "./App";

import "./index.css";
import { Courses, Login, Registration } from "./components";
import { CourseInfo } from "../src/components/CourseInfo/CourseInfo.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/courses" element={<Courses />}>
          <Route path=":courseId" element={<CourseInfo />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>

      <Route path="/login" element={<Login />}></Route>
      <Route path="/registration" element={<Registration />}></Route>
    </Routes>
  </BrowserRouter>
);
