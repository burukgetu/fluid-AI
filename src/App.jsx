import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Gradient from "./components/Gradient";
import IphoneBody from "./components/IphoneBody";
import IphoneBodyFour from "./components/IphoneBodyFour";
import IphoneBodyThree from "./components/IphoneBodyThree";
import IphoneBodyTwo from "./components/IphoneBodyTwo";
import JoinSection from "./components/JoinSection";
import Logo from "./components/Logo";
import MainTitle from "./components/MainTitle";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="w-full">
      <Navbar/>
      <Logo/>
      <Gradient/>
      <MainTitle/>
      <div className="flex flex-col gap-16 mb-16">
        <IphoneBody/>
        <IphoneBodyTwo/>
        <IphoneBodyThree/>
        <IphoneBodyFour/>
      </div>
      <Slider/>
      <Faq/>
      <JoinSection/>
      <Footer/>
      {/* <div className="m-16">hello</div> */}
    </div>
  );
}

export default App
