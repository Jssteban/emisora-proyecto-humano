import React, { useState } from 'react';

/**
 * Componente de login para un concierto.
 * Permite ingresar email y contraseña para iniciar sesión.
 */
const LoginConcert = () => {
    // Estado para almacenar los datos del formulario
    const [formData, setFormData] = useState({
        email: '',
        contrasena: '',
    });

    // Estado para manejar errores de validación
    const [error, setError] = useState('');

    /**
     * Función que se ejecuta cada vez que un campo del formulario cambia.
     * Actualiza el estado de formData con el nuevo valor ingresado.
     */
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    /**
     * Función que maneja el envío del formulario.
     * Aquí se implementaría la lógica de autenticación.
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí iría la lógica de autenticación
        console.log('Datos de login:', formData);
        // Ejemplo de manejo de error (esto se reemplazaría con la lógica real de autenticación)
        if (formData.email === '' || formData.contrasena === '') {
            setError('Por favor, complete todos los campos.');
        } else {
            setError('');
            // Aquí se llamaría a la API de autenticación
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-black bg-opacity-90 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-center text-purple-500">Login para Concierto</h2>
            <form onSubmit={handleSubmit}>
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

                {/* Campo de entrada para la contraseña */}
                <div className="mb-6">
                    <label htmlFor="contrasena" className="block text-purple-500 font-bold mb-2">Contraseña</label>
                    <input
                        type="password"
                        id="contrasena"
                        name="contrasena"
                        value={formData.contrasena}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                    />
                </div>

                {/* Mensaje de error */}
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                {/* Botón de envío del formulario */}
                <button
                    type="submit"
                    className="w-full bg-purple-500 text-white font-bold py-2 px-4 rounded-md hover:bg-purple-600 transition duration-300"
                >
                    Iniciar Sesión
                </button>
            </form>

            {/* Enlace para registro */}
            <p className="mt-4 text-center text-purple-300">
                ¿No tienes una cuenta? 
                <a href="#" className="text-purple-500 hover:text-purple-400 ml-1">Regístrate aquí</a>
            </p>
        </div>
    );
};

export default LoginConcert;