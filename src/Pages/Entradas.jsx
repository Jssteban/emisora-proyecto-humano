import Navbar from "../components/navbar";
import Footer from "../components/Footer";

/**
 * Componente de la página de compra de boletos.
 * Incluye la opción de escanear el código QR y subir evidencia de compra.
 */
const Entradas = () => {
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log("Archivo cargado:", file.name);
        }
    };

    const handleSubmit = () => {
        // Lógica para enviar el archivo cargado
        console.log("Evidencia enviada.");
        alert("¡Evidencia enviada correctamente!");
    };

    return (
        <>
            <div
                className="flex flex-col min-h-screen bg-cover bg-center"
                style={{
                    backgroundImage: `url('https://images.pexels.com/photos/50675/banquet-wedding-society-deco-50675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Barra de navegación */}
                <Navbar />

                {/* Contenido principal */}
                <div className="flex-grow flex flex-col items-center justify-center p-20 bg-white bg-opacity-80 rounded-lg m-8 shadow-lg">
                    <h1 className="text-4xl font-bold text-purple-600 mb-8">Lugar del Evento</h1>
                    
                    {/* Sección del código QR */}
                    <div className="mb-12 text-center">
                        <p className="text-lg text-gray-700 mb-4">loerm</p>
                        <div className="border border-purple-200 rounded-lg p-6 bg-white shadow-lg">
                            <img
                                src="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Código QR para el lugar del evento"
                                className="w-48 h-48 mx-auto"
                            />
                        </div>
                    </div>

                    {/* Detalles del lugar */}
                    <div className="text-center">
                        <p className="text-lg text-purple-600 mb-4">Ubicación del evento:</p>
                        <p className="text-xl mb-4 text-purple-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.</p>
                        <p className="text-lg text-purple-600">Dirección: Lorem ipsum dolor sit amet, consectetur.</p>
                        <p className="text-lg text-purple-600">Capacidad: 500 personas.</p>
                    </div>
                </div>

                {/* Pie de página */}
                <Footer />
            </div>
        </>
    );
};

export default Entradas;
