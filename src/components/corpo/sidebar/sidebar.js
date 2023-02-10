import Copyright from "./copyright";
import Links from "./links";
import Sugestoes from "./sugestoes/sugestoes";
import UsuarioPrincipal from "./usuarioPrincipal";


export default function Sidebar(){
  
    return (
        <div className="sidebar">
        <UsuarioPrincipal key={"catanacomics"} usuario={"catanacomics"} imagem={"assets/img/catanacomics.svg"}/>
        <Sugestoes />
        <Links />
        <Copyright />
      </div>
    )
}

