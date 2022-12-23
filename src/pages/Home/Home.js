import React from "react";
import Aboutsection from "./components/Aboutsection";
import Banner from "./components/Banner";
import Blog from "./components/Blog";
import Carousel from "./components/Carousel";
import Categories from "./components/Categories";
import ContactUs from "./components/ContactUs";
import Doctors from "./components/Doctors";
import Facts from "./components/Facts";
import Nav from "./components/Nav";
import Section1 from "./components/Section1";
import Services from "./components/Services";
const Home = ()=>{
    return(<>
    <Nav/>
    <Section1/>
    <Aboutsection/>
    <Services/>
    <Banner/>
    <Categories/>
    <Doctors/>
    <Facts/>
    <Blog/>
    <Carousel/>
    <ContactUs/>
    </>)
}
export default Home;