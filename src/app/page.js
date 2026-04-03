import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Specialities from "@/components/Specialities";
import Ambience from "@/components/Ambience";
import Testimonials from "@/components/Testimonials";
import Reservation from "@/components/Reservation";
import Contact from "@/components/Contact";


export default function home(){
return(
    <>
     <Navbar />
     <Hero />
     <About />
     <Menu />
     <Specialities />
     <Ambience />
     <Testimonials />
     <Reservation />
     <Contact />
    </>
);
}