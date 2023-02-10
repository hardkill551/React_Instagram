
import Esquerda from "./esquerda/esquerda"
import Sidebar from "./sidebar/sidebar"

export default function Corpo(){
    return (
        <div className="corpo">
        <Esquerda/>
        <Sidebar />
        </div>
    )
    
}
