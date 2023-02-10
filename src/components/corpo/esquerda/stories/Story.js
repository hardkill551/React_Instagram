import Imagem from "./Imagem";
import Usuario from "./Usuario";
import Setinha from "./Setinha";

const story=[
    {user:"9gag", img:"assets/img/9gag.svg"},
    {user:"meowed", img:"assets/img/meowed.svg"},
    {user:"barked", img:"assets/img/barked.svg"},
    {user:"nathanwpylestrangeplanet", img:"assets/img/nathanwpylestrangeplanet.svg"},
    {user:"wawawicomics", img:"assets/img/wawawicomics.svg"},
    {user:"respondeai", img:"assets/img/respondeai.svg"},
    {user:"filomoderna", img:"assets/img/filomoderna.svg"},
    {user:"memeriagourmet", img:"assets/img/memeriagourmet.svg"}
    ]
    


export default function Story(){
    return (
    <div class="stories">
        {story.map(objeto => {
        return <div class="story">
        <Imagem img={objeto.img} alt={objeto.user}/>
        <Usuario user={objeto.user} />
        </div>
        }
        )}
        <Setinha />
    </div>
    )
}