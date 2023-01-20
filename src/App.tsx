import Navbar from "@/scenes/navbar";
import { useState } from "react";
import { SelectedPage } from "@/shared/types";
import { useEffect } from "react";
import Home from "@/scenes/home/Home";
import Benefits from "@/scenes/benefits";
import OurClasses from '@/scenes/ourClasses';
import ContactUs from '@/scenes/contactUs';
import Footer from '@/scenes/footer';


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(()=>{
    const handleScroll = () => {
      if(window.scrollY === 0 ){
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0 ){
        setIsTopOfPage(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return ()=> window.removeEventListener("scroll", handleScroll);
  },[]);

  return (
    <div className="app">

      <div className="md:mb-20">
        <Navbar
            isTopOfPage={isTopOfPage}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
        />
      </div>

      <div className="mb-5">
         <Home setSelectedPage={setSelectedPage}/>
      </div>

      <Benefits setSelectedPage={setSelectedPage}/>

      <OurClasses setSelectedPage={setSelectedPage}/>
      <ContactUs setSelectedPage={setSelectedPage}/>
      <Footer/>
    </div>
  )
}

export default App
