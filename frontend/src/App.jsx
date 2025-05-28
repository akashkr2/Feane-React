import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import MenuAnimated from "./components/MenuAnimated";
import AboutUs from "./components/AboutUs";
import BookATable from "./components/BookATable";
import ReviewCarousel from "./components/ReviewCarousel";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuAnimated />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/book-a-table" element={<BookATable />} />
          <Route path="/review" element={<ReviewCarousel />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
