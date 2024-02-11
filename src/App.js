import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Fix import statement to use Router and Routes
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import SingleProduct from "./SingleProduct";
import Cart from"./Cart"
import ErrorPage from "./ErrorPage";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";

const App = () => {
  const theme = {
        colors:{
          bg:"#F6F8FA",
          footer_bg:"#0a1435",
          btn : "rgb(98 84 243)",
          border:"rgba(98, 84, 243, 0.5)",
          hr:"#ffffff",
          gradient:"linear_gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
          shadow:"rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31,35, 0.15) 0px 0px 0px 1px",
          shadowSupport:"rgba(0, 0, 0, 0.16) 0px 1px 4px",
        },
        media:{
          mobile:"768px",
          tab:"998px",


        },
  };
  return (

    <ThemeProvider theme={theme}>
  <Router>
    <GlobalStyle/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Singleproduct/:id" element={<SingleProduct />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/ErrorPage" element={<ErrorPage />} />






    </Routes>
  </Router>
  </ThemeProvider>
);
};

export default App;
