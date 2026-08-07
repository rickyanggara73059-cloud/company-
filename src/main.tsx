import React from "react";
import ReactDOM from "react-dom/client";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Fleet } from "./components/Fleet";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Partners } from "./components/Partners";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Fleet />
    <WhyChooseUs />
    <Partners />
    <Contact />
    <Footer />
  </React.StrictMode>
);