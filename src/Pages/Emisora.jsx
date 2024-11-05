import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

/**
 * Componente de Donación que incluye un formulario para recopilar información del donante.
 */
const Emisora = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [indicative, setIndicative] = useState('');
    const [phone, setPhone] = useState('');
    const [documentType, setDocumentType] = useState('');
    const [documentNumber, setDocumentNumber] = useState('');
    const [additionalData, setAdditionalData] = useState('');
    const [amount, setAmount] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('Nequi');

    const handleNextStep = (e) => {
        e.preventDefault();
        if (currentStep < 2) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario, por ejemplo, hacer una solicitud a una API
        console.log({
            firstName,
            lastName,
            email,
            indicative,
            phone,
            documentType,
            documentNumber,
            additionalData,
            amount,
            paymentMethod
        });
        alert("¡Gracias por tu donación!");
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-900 text-white">
            <Navbar />
            <div className="flex-grow flex flex-col items-center justify-center p-10">
                <h1 className="text-3xl font-bold text-purple-500 mb-8">Formulario de Donación</h1>
                <form onSubmit={currentStep === 2 ? handleSubmit : handleNextStep} className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-3xl">

                    {/* Sección de Monto a Pagar */}
                    {currentStep === 1 && (
                        <div className="mb-6">
                            <h2 className="text-xl font-semibold text-purple-300 mb-4">Información del Pago</h2>
                            <div className="mb-4">
                                <label className="block text-gray-300">¿Cuánto vas a pagar?</label>
                                <input
                                    type="number"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md text-white"
                                    required
                                />
                            </div>
                        </div>
                    )}

                    {/* Sección de Información Personal */}
                    {currentStep === 2 && (
                        <div className="mb-6">
                            <h2 className="text-xl font-semibold text-purple-300 mb-4">Información Personal</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="mb-4">
                                    <label className="block text-gray-300">Nombre</label>
                                    <input
                                        type="text"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md text-white"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-300">Apellido</label>
                                    <input
                                        type="text"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md text-white"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-300">Correo electrónico</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md text-white"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-300">Indicativo</label>
                                    <input
                                        type="text"
                                        value={indicative}
                                        onChange={(e) => setIndicative(e.target.value)}
                                        className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md text-white"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-300">Teléfono</label>
                                    <input
                                        type="text"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md text-white"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-300">Tipo de documento</label>
                                    <select
                                        value={documentType}
                                        onChange={(e) => setDocumentType(e.target.value)}
                                        className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md text-white"
                                        required
                                    >
                                        <option value="" disabled>Seleccione un tipo de documento</option>
                                        <option value="Cédula">Cédula</option>
                                        <option value="Pasaporte">Pasaporte</option>
                                        <option value="Nit">Nit</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-300">Número de documento</label>
                                    <input
                                        type="text"
                                        value={documentNumber}
                                        onChange={(e) => setDocumentNumber(e.target.value)}
                                        className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md text-white"
                                        required
                                    />
                                </div>
                                <div className="mb-4 col-span-2">
                                    <label className="block text-gray-300">Datos adicionales (Opcional)</label>
                                    <textarea
                                        value={additionalData}
                                        onChange={(e) => setAdditionalData(e.target.value)}
                                        className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md text-white"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Sección de Forma de Pago */}
                    {currentStep === 2 && (
                        <div className="mb-6">
                            <h2 className="text-xl font-semibold text-purple-300 mb-4">Forma de Pago</h2>
                            <select
                                value={paymentMethod}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                                className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md text-white"
                                required
                            >
                                <option value="Nequi">Nequi</option>
                                <option value="Daviplata">Daviplata</option>
                                <option value="Transferencia Bancaria">Transferencia Bancaria</option>
                            </select>
                        </div>
                    )}

                    {/* Botones de Navegación */}
                    <div className="flex justify-between mt-4">
                        {currentStep === 1 && (
                            <button
                                type="submit"
                                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-md transition-colors duration-300"
                            >
                                Siguiente
                            </button>
                        )}
                        {currentStep === 2 && (
                            <button
                                type="submit"
                                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-md transition-colors duration-300"
                            >
                                Donar
                            </button>
                        )}
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Emisora;
