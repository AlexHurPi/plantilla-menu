// App.jsx
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './languages/i18n.js';  // ← Agrega esta línea al inicio

import Header from './components/header-components/Header.jsx';
import Inicio from './pages/Inicio.jsx';  // ← Importar aquí
import Servicios from './pages/Servicios.jsx';  // ← Importar aquí
import Footer from './components/footer-components/footer.jsx';
import './App.css';

// App.jsx (sin Router aquí)
function App() {
  return (
    <>
      <Header />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Inicio />} />{/**Para indicar cual archivo debe iniciar */}
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/servicios" element={<Servicios />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
