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
                    backgroundImage: `url('https://th.bing.com/th/id/R.02077c4e2c856a90fbf070762c579ff2?rik=fUyTv%2fWOeTYAIg&pid=ImgRaw&r=0')`,
                }}
            >
                {/* Barra de navegación */}
                <Navbar />

                {/* Contenido principal */}
                <div className="flex-grow flex flex-col items-center justify-center p-20 bg-white bg-opacity-80 rounded-lg m-8 shadow-lg">
                    <h1 className="text-4xl font-bold text-purple-600 mb-8">Compra de Entradas</h1>
                    
                    {/* Sección del código QR */}
                    <div className="mb-12 text-center">
                        <p className="text-lg text-gray-700 mb-4">Escanea el siguiente código QR para realizar la compra:</p>
                        <div className="border border-purple-200 rounded-lg p-6 bg-white shadow-lg">
                            <img
                                src="https://assets-global.website-files.com/63be0fb85664b94d14287a6c/640201eb1c3d4c1d1987b0a7_qr-morado.png"
                                alt="Código QR para la compra"
                                className="w-48 h-48 mx-auto"
                            />
                        </div>
                    </div>

                    {/* Sección para subir evidencia */}
                    <div className="text-center">
                        <p className="text-lg text-gray-700 mb-4">Sube la evidencia de tu compra:</p>
                        <label className="block">
                            <input
                                type="file"
                                accept="image/*,application/pdf"
                                onChange={handleFileUpload}
                                className="hidden"
                            />
                            <div className="cursor-pointer inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded shadow-lg transition-colors duration-300">
                                Seleccionar archivo
                            </div>
                        </label>
                        <p className="text-sm text-gray-500 mt-2">Formatos permitidos: JPG, PNG, PDF</p>
                        
                        {/* Botón de Enviar */}
                        <button
                            onClick={handleSubmit}
                            className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded shadow-lg transition-colors duration-300"
                        >
                            Enviar
                        </button>
                    </div>
                </div>

                {/* Pie de página */}
                <Footer />
            </div>
        </>
    );
};

export default Entradas;
