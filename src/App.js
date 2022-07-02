import React from "react";
import "./styles/index.css";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path=":detailID" element={<MovieDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
