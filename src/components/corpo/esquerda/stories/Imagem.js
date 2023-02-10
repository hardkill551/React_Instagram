export default function Imagem(props) {
    return (
        <div class="imagem">
            <img src={props.img} alt={props.user} />
        </div>
    )
}