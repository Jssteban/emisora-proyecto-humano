import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Componente CorporationInfo que muestra información sobre la Corporación Nuevo Talento Humano,
 * incluyendo una descripción y una galería de imágenes con efectos de hover.
 * 
 * @returns {JSX.Element} El componente de información de la corporación.
 */
const CorporationInfo = () => {
    // Array de objetos que contiene las imágenes de la galería con su fuente, texto alternativo e información adicional
    const galleryImages = [
        {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJjB2MuxDxqyldBeAxvBW2xbFLJVkM322WA&s",
            alt: "Imagen 1",
            info: "Descripción de la Imagen 1"
        },
        {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiAwAU4ymtyu7pjnn9yh0AV76qPHAtTydC2w&s",
            alt: "Imagen 2",
            info: "Descripción de la Imagen 2"
        },
        {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs_ptligSgrNz6krBLWv0fhfJyaHiIUUOGzg&s",
            alt: "Imagen 3",
            info: "Descripción de la Imagen 3"
        },
        {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAeP3u_T4mB7_HTGDFzIaa3z3VbWsNnNJh1UISUEShv0q6Nqh5S2cxfmf8Fc5N4QR-xuM&usqp=CAU",
            alt: "Imagen 4",
            info: "Descripción de la Imagen 4"
        }
    ];

    return (
        <div className="bg-white text-green-600 p-8 text-center">
            {/* Sección de logo y título */}
            <div className="flex items-center justify-center mb-4">
                <Link to="/">
                    <img 
                        src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=262,fit=crop,q=95/Yanyz7vRZ9unz8Nb/logo-A85wrD0ONlc40jbk.jpg" 
                        alt="Corporación Logo" 
                        className="w-16 h-16 mr-4 rounded-full object-cover hover:opacity-80 transition-opacity duration-300"
                    />
                </Link>
                <h2 className="text-4xl font-bold text-green-600">Corporación Nuevo Talento Humano</h2>
            </div>

            {/* Sección de descripción */}
            <div className="mb-8">
                <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Accusamus a excepturi quae quaerat, harum aspernatur enim distinctio voluptas incidunt placeat ducimus,
                    velit et nihil temporibus praesentium ex doloribus, cum fugiat.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quam accusamus quo error magni accusantium! Esse ipsum harum aliquid rem perspiciatis aliquam.
                    Dolore nam tempore excepturi. Blanditiis nisi fugiat ratione recusandae.
                </p>
            </div>

            {/* Sección de galería de imágenes */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
                {galleryImages.map((image, index) => (
                    <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group">
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-48 h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        {/* Capa de información superpuesta */}
                        <div className="absolute inset-0 bg-green-600 bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-white text-center p-2">{image.info}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CorporationInfo;
