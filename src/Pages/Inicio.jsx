import AnimatedBackground from "../components/AnimatedBackground";
import CorporationInfo from "../components/CorporationInfo";
import CountdownTimer from "../components/CountdownTimer";
import EventInfoSection from "../components/EventInfoSection";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";

const Inicio = () => {
    return(
    <>
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <AnimatedBackground className="flex-grow">
        <div className="pt-16 flex-grow">
          <CountdownTimer/>
        </div>
      </AnimatedBackground>
      <EventInfoSection />
      <CorporationInfo />
      <Footer />
    </div>
    </>
    );
}

export default Inicio;
