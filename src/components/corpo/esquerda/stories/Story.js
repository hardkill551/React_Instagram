import Imagem from "./Imagem";
import User from "./User";
import Setinha from "./Setinha";
import story from "./arrayStories";

export default function Story(){
    return (
    <div className="stories">
        {story.map((objeto, index) => {
        return <div className="story">
        <Imagem key={index.user} img={objeto.img} alt={objeto.user}/>
        <User key={index.user} user={objeto.user} />
        </div>
        }
        )}
        <Setinha />
    </div>
    )
}