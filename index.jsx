import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Card from "./components/Card";
import Cardtwo from "./components/Cardtwo";
import Cardthree from "./components/Cardthree";
import Cardfour from "./components/Cardfour"


export default function Home(){
  return(
  <div>
   <Navbar/>
    <HeroSection/>
    <Card/>
    <Cardfour/>
    <Cardtwo/>
    <Cardthree/>
  </div>
  )
}


