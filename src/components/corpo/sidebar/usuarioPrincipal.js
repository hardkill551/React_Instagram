export default function UsuarioPrincipal(props) {

    return <div class="usuario">
        <img src="assets/img/catanacomics.svg" alt="imagem de perfil" />
        <div class="texto">
            <span>
                <strong>{props.usuario}</strong>
                <ion-icon name="pencil"></ion-icon>
            </span>
        </div>
    </div>

} 