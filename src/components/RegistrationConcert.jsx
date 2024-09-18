import React, { useState } from 'react';

/**
 * Componente de registro para un concierto.
 * Permite ingresar nombre, email, teléfono y seleccionar el tipo de entrada.
 */
const RegistrationConcert = () => {
    // Estado para almacenar los datos del formulario
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        tipoEntrada: 'general', // Valor por defecto del select
    });

    /**
     * Función que se ejecuta cada vez que un campo del formulario cambia.
     * Actualiza el estado de formData con el nuevo valor ingresado.
     */
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState, // Mantiene los valores anteriores
            [name]: value // Actualiza el campo que cambió
        }));
    };

    /**
     * Función que maneja el envío del formulario.
     * Prevendrá la acción por defecto del formulario y mostrará los datos en consola.
     */
    const handleSubmit = (e) => {
        e.preventDefault(); // Evita que el formulario se recargue
        console.log('Datos del formulario:', formData); // Muestra los datos del formulario en la consola
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white bg-opacity-90 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-center">Registro para Concierto</h2>
            {/* Formulario que captura los datos del registro */}
            <form onSubmit={handleSubmit}>
                {/* Campo de entrada para el nombre */}
                <div className="mb-4">
                    <label htmlFor="nombre" className="block text-purple-500 font-bold mb-2">Nombre</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                    />
                </div>
                {/* Campo de entrada para el email */}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-purple-500 font-bold mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                    />
                </div>
                {/* Campo de entrada para el teléfono */}
                <div className="mb-4">
                    <label htmlFor="telefono" className="block text-purple-500 font-bold mb-2">Teléfono</label>
                    <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                    />
                </div>
                {/* Campo de selección para el tipo de entrada */}
                <div className="mb-6">
                    <label htmlFor="tipoEntrada" className="block text-purple-500 font-bold mb-2">Tipo de Entrada</label>
                    <select
                        id="tipoEntrada"
                        name="tipoEntrada"
                        value={formData.tipoEntrada}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:bg-purple-500"
                    >
                        <option value="general">General</option>
                        <option value="vip">VIP</option>
                        <option value="platinum">Platinum</option>
                    </select>
                </div>
                {/* Botón de envío del formulario */}
                <button
                    type="submit"
                    className="w-full bg-purple-500 text-white font-bold py-2 px-4 rounded-md hover:bg-purple-600 transition duration-300"
                >
                    Registrarse
                </button>
            </form>
        </div>
    );
};

export default RegistrationConcert;
