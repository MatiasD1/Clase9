import NavBar from "../components/NavBar";
import {Outlet} from "react-router-dom";

function Layout(){

    return(
        <div>
            <NavBar/>
            
            <Outlet/>{/*Contenido del hijo o de la ruta hija */}          
            <footer>
                <p>React</p>
            </footer>
        </div>
    )
}

export default Layout;