import NavBar from "../components/NavBar";
import {Outlet} from "react-router-dom";

function Home(){

    return(
        <div>
            <NavBar/>
            <Outlet/>{/*Contenido del hijo o de la ruta hija */}          
        </div>
    )
}

export default Home;