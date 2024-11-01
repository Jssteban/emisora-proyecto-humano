import AnimatedBackground from "../components/AnimatedBackground";
import CorporationInfo from "../components/CorporationInfo";
import CountdownTimer from "../components/CountdownTimer";
import EventInfoSection from "../components/EventInfoSection";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";

/**
 * Componente principal de la página de inicio.
 * Integra diferentes secciones como el Navbar, un fondo animado, un temporizador de cuenta regresiva,
 * información del evento, información de la corporación y un pie de página.
 */
const Inicio = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                {/* Barra de navegación fija en la parte superior */}
                <Navbar />

                {/* Fondo animado que ocupa el espacio restante */}
                <AnimatedBackground className="flex-grow" >
                    <div className="pt-16 flex-grow">
                        {/* Temporizador de cuenta regresiva */}
                        <CountdownTimer />
                    </div>
                </AnimatedBackground>

                {/* Sección de información del evento */}
                <EventInfoSection />

                {/* Información de la corporación */}
                <CorporationInfo />

                {/* Pie de página fijo en la parte inferior */}
                <Footer />
            </div>
        </>
    );
}

export default Inicio;
