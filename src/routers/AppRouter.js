import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "../components/App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import PagesPopular from "../pages/PagesPopular";
import PagesTopRated from "../pages/PagesTopRated";
import PagesNowPlaying from "../pages/PagesNowPlaying";
import PagesUpcoming from "../pages/PagesUpcoming";
import PagesHome from "../pages/PagesHome";
import PagesFavorites from "../pages/PagesFavorites";
import PageAbout from "../pages/PageAbout";
import HomeAPI from "../api/APIFunctionality";

function AppRouter() {

  
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header/>
        <Routes>
          <Route path="/" element={<PagesHome />} />
          <Route path="/popular" element={<PagesPopular />} />
          <Route path="/top-rated" element={<PagesTopRated />} />
          <Route path="/now-playing" element={<PagesNowPlaying />} />
          <Route path="/upcoming" element={<PagesUpcoming />} />
          <Route path="/favorites" element={<PagesFavorites />} />
          <Route path="/about" element={<PageAbout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
