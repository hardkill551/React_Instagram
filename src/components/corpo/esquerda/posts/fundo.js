export default function Fundo(props) {

    return (
        <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.imageCurtidas} alt={props.nomeCurtidas}/>
          <div class="texto">
            Curtido por <strong>{props.nomeCurtidas}</strong> e <strong>outras 101.523 pessoas</strong>
          </div>
        </div>
      </div>
        )
}