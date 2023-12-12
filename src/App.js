//Tres componentes 
//BrowserRouter: El principal implementa el router y mantiene sincronizada la URL con la interfaz del usuario
//Routes: Contenedor para las rutas individuales
//Route: Ruta individual

import {BrowserRouter, Routes, Route} from "react-router-dom"; 
import Home from "./Pages/Home";
import Galeria from "./Pages/Galeria";
import Productos from "./Pages/Productos";
import Error from "./Pages/Error";
import Layout from "./Pages/Layout";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Layout/>}/>{/*Path: A dónde quiere ir el usuario. Element: Con qué le respondo*/}
        <Route path="galeria" element={<Galeria/>}/>
        <Route path="productos" element={<Productos/>}/>
        <Route path="*" element={<Error/>}/>{/*"*" significa que no matchea con ninguna pagina existente */}
      </Routes>
      {/*<footer>Footer</footer>*/}
    </BrowserRouter>
  );
}

export default App;
