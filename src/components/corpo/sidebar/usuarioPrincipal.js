import React from 'react'

export default function UsuarioPrincipal(props) {
    const [nome, setNome] = React.useState(props.usuario)
    const [imagem, setImagem] = React.useState(props.imagem)
    return <div className="usuario">
        <img data-test="profile-image"onClick={() => setImagem(mudarImagem(imagem))} src={imagem} alt="imagem de perfil" />
        <div className="texto">
            <span>
                <strong data-test="name">{nome}</strong>
                <ion-icon data-test="edit-name" onClick={() => setNome(mudarNome(nome))} name="pencil"></ion-icon>
            </span>
        </div>
    </div>

}

function mudarNome(nome) {
    const x = prompt("Qual nome você quer pôr?")
    if (x) {
        return x
    }

    alert("Nome inválido")

    return nome
}

function mudarImagem(imagem) {
    const x = prompt("Insira o URL da imagem")
    if (isURL(x)) {
        return x
    }
    alert("Insira uma URL válida")
    return imagem
}

function isURL(n){
    try {
        let url = new URL(n)
        return true
      } catch(err) {
          return false
      }
}
