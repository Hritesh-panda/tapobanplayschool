import React from "react";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/navbar/Navbar";
import Contact from "../../component/Contact/Contact";
import Header from "../../component/Header/Header";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
