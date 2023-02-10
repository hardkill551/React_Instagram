export default function Usuario(props) {
    
    return (
        <div className="topo">
            <div className="usuario">
                <img src={props.imagem} alt={props.usuario} />
                {props.usuario}
            </div>
            <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
        )
}