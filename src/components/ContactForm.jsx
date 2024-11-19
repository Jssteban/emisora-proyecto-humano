import React, { useState } from 'react';

/**
 * Componente de contacto para solicitar información de la corporación.
 * Incluye un formulario con campos para nombre, email, teléfono y mensaje.
 */
const ContactForm = () => {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  });

  // Estado para manejar los errores de validación
  const [errors, setErrors] = useState({});

  // Función para manejar los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Función para validar los datos del formulario
  const validateForm = () => {
    let formErrors = {};
    if (!formData.nombre) formErrors.nombre = "El nombre es obligatorio.";
    if (!formData.email) formErrors.email = "El email es obligatorio.";
    if (!formData.mensaje) formErrors.mensaje = "El mensaje es obligatorio.";
    return formErrors;
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Datos del formulario:', formData);
      // Aquí iría la lógica para enviar los datos al servidor
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="bg-white text-green-700 py-12 px-6 sm:px-10 lg:px-16">
      <div className="max-w-lg mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-8">Contáctanos</h2>
        <p className="text-center mb-6">
          ¿Tienes alguna pregunta o deseas más información sobre la corporación? ¡Déjanos tu mensaje!
        </p>
        <form onSubmit={handleSubmit}>
          {/* Campo de entrada para el nombre */}
          <div className="mb-4">
            <label htmlFor="nombre" className="block text-green-700 font-bold mb-2">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>}
          </div>

          {/* Campo de entrada para el email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-green-700 font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Campo de entrada para el teléfono */}
          <div className="mb-4">
            <label htmlFor="telefono" className="block text-green-700 font-bold mb-2">Teléfono (Opcional)</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Campo de entrada para el mensaje */}
          <div className="mb-6">
            <label htmlFor="mensaje" className="block text-green-700 font-bold mb-2">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            ></textarea>
            {errors.mensaje && <p className="text-red-500 text-sm mt-1">{errors.mensaje}</p>}
          </div>

          {/* Botón de envío del formulario */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700 transition duration-300"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
