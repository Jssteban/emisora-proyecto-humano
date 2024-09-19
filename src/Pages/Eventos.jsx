import AnimatedBackground2 from "../components/AnimatedBackground2";
import CorporationInfo from "../components/CorporationInfo";
import CountdownTimer from "../components/CountdownTimer";
import EventInfoSection from "../components/EventInfoSection";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import ConcertEvent from "../components/ConcertEvent";

/**
 * Componente `Eventos`
 * 
 * Este componente representa la página de eventos de la aplicación, en la que los usuarios pueden obtener información 
 * sobre próximos eventos, como un concierto, junto con información adicional sobre la corporación.
 * 
 * Estructura del componente:
 * - `Navbar`: Componente que muestra la barra de navegación en la parte superior de la página.
 * - `AnimatedBackground2`: Fondo animado que cubre la mayor parte de la pantalla, proporcionando un diseño visualmente atractivo.
 * - `CountdownTimer`: Un temporizador que muestra la cuenta regresiva para el próximo evento.
 * - `ConcertEvent`: Información específica relacionada con el próximo concierto, como detalles del evento.
 * - `CorporationInfo`: Sección con información sobre la corporación responsable de los eventos.
 * - `Footer`: Pie de página que contiene enlaces e información adicional.
 * 
 * Diseño general:
 * - La estructura utiliza `flexbox` para asegurar que el contenido se distribuya correctamente a lo largo de la pantalla.
 * - Se asegura de que todos los componentes estén bien espaciados, con un fondo animado y una cuenta regresiva para atraer la atención del usuario.
 * 
 * @returns {JSX.Element} - Retorna la estructura de la página de eventos con un temporizador y secciones de información.
 */

const Eventos = () => {
    return(
    <>
    <div className="flex flex-col min-h-screen">
      
      {/* Barra de navegación */}
      <Navbar />
      
      {/* Fondo animado y temporizador */}
      <AnimatedBackground2 className="flex-grow">
        <div className="pt-16 flex-grow">
          <CountdownTimer />
        </div>
      </AnimatedBackground2>
      
      {/* Sección de evento y corporación */}
      <ConcertEvent />
      <CorporationInfo />
      
      {/* Pie de página */}
      <Footer />
    </div>
    </>
    );
}

export default Eventos;
