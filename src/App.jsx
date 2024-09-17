import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './Pages/Inicio';
import Eventos from './Pages/Eventos';
// import Artistas from './Pages/Artistas';
// import Boletos from './Pages/Boletos';
// import Contacto from './Pages/Contacto';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/eventos" element={<Eventos />} />
        {/* <Route path="/artistas" element={<Artistas />} />
        <Route path="/boletos" element={<Boletos />} />
        <Route path="/contacto" element={<Contacto />} />  */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
