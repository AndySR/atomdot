import React, { Component } from "react";
import Hero from "./hero";
import Navbar from "./navbar";
import Services from "./service";
import Pricing from "./pricing";
import Features from "./features";
import Customers from "./customers";
import Footer from "./footer";
class Home extends Component {
  render() {
    return (
      <main ref="main">
        <Hero />
        <Navbar />
        <Customers />
        <Features />
        <Pricing />
        <Services />
        <Footer />
      </main>
    );
  }
}
export default Home;
