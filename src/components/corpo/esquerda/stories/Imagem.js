export default function Imagem(props) {
    return (
        <div className="imagem">
            <img src={props.img} alt={props.user} />
        </div>
    )
}