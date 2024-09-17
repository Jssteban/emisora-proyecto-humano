import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'; // Importamos los íconos

const Footer = () => {
    return (
        <footer className="bg-black text-white p-6">
            <div className="container mx-auto text-center">
                <h4 className="text-lg font-semibold mb-4 text-purple-700">Síguenos en nuestras redes sociales</h4>
                
                {/* Sección de iconos */}
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-2xl text-blue-500 hover:text-blue-700" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-2xl text-pink-500 hover:text-pink-700" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-2xl text-blue-400 hover:text-blue-600" />
                    </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <FaYoutube className="text-2xl text-red-500 hover:text-red-700" />
                    </a>
                </div>
                
                <p className="text-sm">© 2024 Corporación Nuevo Talento Humano. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
