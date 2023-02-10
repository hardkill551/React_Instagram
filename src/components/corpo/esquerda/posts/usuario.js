export default function Usuario(props) {
    return (
        <div class="topo">
            <div class="usuario">
                <img src={props.imagem} alt={props.usuario} />
                {props.usuario}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
        )
}