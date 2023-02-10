
import Posts from "./posts/posts";
import Story from "./stories/Story";

export default function Esquerda(){
    return (
        <div className="esquerda">
        <Story />
        <Posts />
        </div>
    )
}