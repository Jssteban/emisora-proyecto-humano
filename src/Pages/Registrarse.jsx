import AnimatedBackground2 from "../components/AnimatedBackground2";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import RegistrationConcert from "../components/RegistrationConcert";

/**
 * Componente de la página de registro para el concierto.
 * Integra una barra de navegación, un fondo animado, un formulario de registro y un pie de página.
 */
const Registrarse = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                {/* Barra de navegación fija en la parte superior */}
                <Navbar />

                {/* Fondo animado que ocupa el espacio restante */}
                <AnimatedBackground2 className="flex-grow">
                    <div className="pt-16 flex-grow">
                        {/* Formulario de registro para el concierto */}
                        <RegistrationConcert />
                    </div>
                </AnimatedBackground2>

                {/* Pie de página fijo en la parte inferior */}
                <Footer />
            </div>
        </>
    );
};

export default Registrarse;
