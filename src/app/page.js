import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Specialities from "@/components/Specialities";
import Ambience from "@/components/Ambience";


export default function home(){
return(
    <>
     <Navbar />
     <Hero />
     <About />
     <Menu />
     <Specialities />
     <Ambience />
    </>
);
}