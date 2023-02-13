import { useState } from "react"

export default function Conteudo(props) {
  const [curtidas, setCurtidas] = useState(101)
  const [preencher, setPreencher] = useState(false)
  const [heart, setHeart] = useState(false)
  const x = 101
  
    return (
      <>
      <div className="conteudo">
      <img data-test="post-image" onDoubleClick={() => setCurtidas(adicionarCurtida(curtidas, x, heart, setHeart))} src={props.imagePost} alt={props.nomeImagem}/>
      <ion-icon data-test="like-post" class={`${heart ? "animacao animacao1" : "animacao"}`} name="heart"></ion-icon>
      </div>
        <div className="fundo">
        <div className="acoes"> 
          <div>
            <ion-icon data-test="like-post" onClick={() => setCurtidas(adicionarCurtidas(curtidas, x))} class={`${curtidas==101 ? "" : "vermelho"}`} name={`heart${curtidas==101 ? "-outline" : ""}`}></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon data-test="save-post" onClick={() => setPreencher(preencherSalvar(preencher))} name={`bookmark${preencher==false ? "-outline" : ""}`}></ion-icon>
          </div>
        </div>
        <div className="curtidas">
          <img src={props.imageCurtidas} alt={props.nomeCurtidas}/>
          <div className="texto">
            Curtido por <strong>{props.nomeCurtidas}</strong> e <strong data-test="likes-number">outras {curtidas} pessoas</strong>
          </div>
        </div>
      </div>
      </>
        )
}

function adicionarCurtidas(curtidas, x){

  if(x==curtidas){
    return curtidas+1
  }
  return curtidas-1
}

function adicionarCurtida(curtidas, x, heart, setHeart){    
  console.log(curtidas)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
  if(x+1==curtidas){
    setHeart(heart=true)
    setTimeout(function() {
      setHeart(heart=false)
    }, 500)
    return curtidas
  }
  setHeart(heart=true)
  setTimeout(function() {
    setHeart(heart=false)
  }, 500)
  return curtidas+1
}

function preencherSalvar(preencher){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
  if(preencher==false){
    return true
  }
  return false
}
