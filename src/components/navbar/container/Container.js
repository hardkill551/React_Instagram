import Logo from "./Logo.js"
import Pesquisa from "./Pesquisa.js"
import Icones from "./Icones"
import Icones_mobile from "./Icones_mobile"

export default function Container(){
    return (
    <div className="container">
        <Logo />
        <Pesquisa />
        <Icones />
        <Icones_mobile />
    </div>)
}


