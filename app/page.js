'use client'
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Countries from "./components/Countries";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <AboutUs/>
    <Explore/>
    <Countries/>
    <ContactUs/>
    <Footer/>
    </>
  );
}
