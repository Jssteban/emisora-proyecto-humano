import AnimatedBackground2 from "../components/AnimatedBackground2";
import CorporationInfo from "../components/CorporationInfo";
import CountdownTimer from "../components/CountdownTimer";
import EventInfoSection from "../components/EventInfoSection";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import ConcertEvent from "../components/ConcertEvent";

const Eventos = () => {
    return(
    <>
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <AnimatedBackground2 className="flex-grow">
        <div className="pt-16 flex-grow">
        <CountdownTimer />
        </div>
      </AnimatedBackground2>
      <ConcertEvent />
      <CorporationInfo />
      <Footer />
    </div>
    </>
    );
}

export default Eventos;
