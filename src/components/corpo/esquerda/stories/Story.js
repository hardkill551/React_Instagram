import Imagem from "./Imagem";
import User from "./User";
import Setinha from "./Setinha";
import story from "./arrayStories";

export default function Story(){
    return (
    <div class="stories">
        {story.map(objeto => {
        return <div class="story">
        <Imagem img={objeto.img} alt={objeto.user}/>
        <User user={objeto.user} />
        </div>
        }
        )}
        <Setinha />
    </div>
    )
}