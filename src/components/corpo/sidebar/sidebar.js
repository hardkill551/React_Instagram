import Copyright from "./copyright";
import Links from "./links";
import Sugestoes from "./sugestoes/sugestoes";
import UsuarioPrincipal from "./usuarioPrincipal";

export default function Sidebar(){
    return (
        <div class="sidebar">
        <UsuarioPrincipal usuario={"catanacomics"}/>
        <Sugestoes />
        <Links />
        <Copyright />
      </div>
    )
}