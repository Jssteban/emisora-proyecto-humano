import React, { useState } from 'react';

/**
 * Componente de registro para un concierto.
 * Permite ingresar nombre, email, teléfono, edad, contraseña, confirmar contraseña y seleccionar el tipo de entrada.
 */
const RegistrationConcert = () => {
    // Estado para almacenar los datos del formulario
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        edad: '',
        contrasena: '',
        confirmarContrasena: '',
        tipoEntrada: 'general', // Valor por defecto del select
    });

    // Estado para manejar errores de validación
    const [errors, setErrors] = useState({});

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
     * Función que valida los datos del formulario.
     * Retorna un objeto con los errores encontrados.
     */
    const validateForm = () => {
        let errors = {};
        if (formData.contrasena !== formData.confirmarContrasena) {
            errors.confirmarContrasena = "Las contraseñas no coinciden";
        }
        if (formData.edad && (isNaN(formData.edad) || formData.edad < 0)) {
            errors.edad = "La edad debe ser un número positivo";
        }
        return errors;
    };

    /**
     * Función que maneja el envío del formulario.
     * Valida los datos, previene la acción por defecto del formulario y muestra los datos en consola si no hay errores.
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            console.log('Datos del formulario:', formData);
            // Aquí iría la lógica para enviar los datos al servidor
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <div className="max-w-xl mx-auto mt-10 p-6 bg-black bg-opacity-90 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-center text-purple-500">Registro para Concierto</h2>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    {/* Campo de entrada para el nombre */}
                    <div>
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
                    <div>
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
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                    {/* Campo de entrada para el teléfono */}
                    <div>
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
                    {/* Campo de entrada para la edad */}
                    <div>
                        <label htmlFor="edad" className="block text-purple-500 font-bold mb-2">Edad</label>
                        <input
                            type="number"
                            id="edad"
                            name="edad"
                            value={formData.edad}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        />
                        {errors.edad && <p className="text-red-500 text-sm mt-1">{errors.edad}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                    {/* Campo de entrada para la contraseña */}
                    <div>
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
                    {/* Campo de entrada para confirmar la contraseña */}
                    <div>
                        <label htmlFor="confirmarContrasena" className="block text-purple-500 font-bold mb-2">Confirmar Contraseña</label>
                        <input
                            type="password"
                            id="confirmarContrasena"
                            name="confirmarContrasena"
                            value={formData.confirmarContrasena}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        />
                        {errors.confirmarContrasena && <p className="text-red-500 text-sm mt-1">{errors.confirmarContrasena}</p>}
                    </div>
                </div>

                {/* Campo de selección para el tipo de entrada */}
                <div className="mb-6">
                    {/* <label htmlFor="tipoEntrada" className="block text-purple-500 font-bold mb-2">Tipo de Entrada</label>
                    <select
                        id="tipoEntrada"
                        name="tipoEntrada"
                        value={formData.tipoEntrada}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                        <option value="general">General</option>
                        <option value="vip">VIP</option>
                        <option value="platinum">Platinum</option>
                    </select> */}
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
