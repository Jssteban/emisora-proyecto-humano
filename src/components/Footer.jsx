import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // Importamos el ícono de X (Twitter)

/**
 * Componente funcional que representa el pie de página del sitio.
 * Incluye enlaces a páginas del sitio, redes sociales y un texto de derechos reservados.
 */
const Footer = () => {
    return (
        <footer className="bg-black text-white p-6">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Columna de información del sitio */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-purple-500">Corporación Nuevo Talento Humano</h4>
                        <p className="text-sm">Desarrollando el potencial humano para un futuro mejor.</p>
                    </div>

                    {/* Columna de enlaces a páginas */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-purple-500">Enlaces Rápidos</h4>
                        <ul className="text-sm space-y-2">
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Inicio</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Sobre Nosotros</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Servicios</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Contacto</a></li>
                        </ul>
                    </div>

                    {/* Columna de redes sociales */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-purple-500">Síguenos</h4>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                                <FaFacebook className="text-2xl" />
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                                <FaInstagram className="text-2xl" />
                            </a>
                            <a href="https://www.x.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                                <FaXTwitter className="text-2xl" />
                            </a>
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                                <FaYoutube className="text-2xl" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Línea divisoria */}
                <hr className="my-6 border-gray-700" />

                {/* Texto de derechos reservados */}
                <div className="text-center text-sm">
                    <p>© 2024 Corporación Nuevo Talento Humano. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;