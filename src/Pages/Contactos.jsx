import AnimatedBackground3 from "../components/AnimatedBackground3";
import CorporationInfo from "../components/CorporationInfo";
import Aboutus from "../components/Aboutus";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import FundacionInfoSection from "../components/FundacionInfoSection";
import ContactForm from "../components/ContactForm";

const Contactos = () => {
    return(
    <>
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <AnimatedBackground3 className="flex-grow">
        <div className="pt-16 flex-grow">
        <Aboutus />
        </div>
      </AnimatedBackground3>
      <FundacionInfoSection />
      <CorporationInfo />
      <ContactForm />
      <Footer />
    </div>
    </>
    );
}

export default Contactos;