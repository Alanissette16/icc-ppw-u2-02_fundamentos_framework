import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// Importar el componente Perfil desde la carpeta perfilPage
import Perfil from "./perfilPage/Perfil"; 
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        {/* Menú de navegación */}
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/">Inicio</Link> | <Link to="/perfil">Perfil</Link>
        </nav>

        {/* Rutas */}
        <Routes>
          {/* Ruta principal */}
          <Route
            path="/"
            element={
              <>
                <h1>Bienvenido a mi práctica de React + Vite</h1>
                <p>Haz clic en "Perfil" para ver el componente solicitado.</p>
              </>
            }
          />
          {/* Ruta para el componente Perfil */}
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
