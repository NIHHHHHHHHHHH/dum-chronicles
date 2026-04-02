import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Specialities from "@/components/Specialities";

export default function home(){
return(
    <>
     <Navbar />
     <Hero />
     <About />
     <Menu />
     <Specialities />
    </>
);
}