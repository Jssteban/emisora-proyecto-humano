import AnimatedBackground3 from "../components/AnimatedBackground3";
import CorporationInfo from "../components/CorporationInfo";
import Aboutus from "../components/Aboutus";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FundacionInfoSection from "../components/FundacionInfoSection";
import ContactForm from "../components/ContactForm";

/**
 * Componente `Contactos`
 * Este componente organiza una página de contacto que incluye varias secciones como "Sobre Nosotros", información de la fundación,
 * un formulario de contacto, y un pie de página. La estructura general está envuelta en un diseño flexbox para hacer que la
 * página sea completamente responsiva y mantenga un layout consistente.
 * 
 * Estructura del componente:
 * - `Navbar`: Un componente que representa la barra de navegación que aparece en la parte superior de la página.
 * - `AnimatedBackground3`: Proporciona un fondo animado para la sección "Sobre Nosotros" (`Aboutus`), que está contenido dentro de este fondo.
 * - `Aboutus`: Una sección que contiene información sobre la empresa o fundación.
 * - `FundacionInfoSection`: Muestra información adicional sobre los proyectos o las misiones de la fundación.
 * - `CorporationInfo`: Proporciona más detalles sobre la corporación.
 * - `ContactForm`: Un formulario que permite a los usuarios enviar mensajes o contactarse con la organización.
 * - `Footer`: El pie de página que incluye información relevante o enlaces adicionales.
 * 
 * Diseño general:
 * - Se utiliza `flexbox` para distribuir las secciones verticalmente en la página.
 * - La clase `min-h-screen` asegura que la página ocupe al menos la altura de la ventana visible.
 * - `flex-grow` se aplica en algunos contenedores para permitir que ocupen el espacio necesario.
 * 
 * @returns {JSX.Element} - Retorna el layout completo con las secciones y componentes descritos.
 */

const Contactos = () => {
    return(
    <>
    {/* Contenedor principal de la página */}
    <div className="flex flex-col min-h-screen">
      
      {/* Barra de navegación */}
      <Navbar />

      {/* Fondo animado con la sección "Sobre Nosotros" */}
      <AnimatedBackground3 className="flex-grow">
        <div className="pt-16 flex-grow">
          <Aboutus />
        </div>
      </AnimatedBackground3>

      {/* Sección con información sobre la fundación */}
      <FundacionInfoSection />

      {/* Información adicional sobre la corporación */}
      <CorporationInfo />

      {/* Formulario de contacto */}
      <ContactForm />

      {/* Pie de página */}
      <Footer />
    </div>
    </>
    );
}

export default Contactos;
