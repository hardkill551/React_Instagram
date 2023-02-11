import { useState } from "react"

export default function Conteudo(props) {
  const [curtidas, setCurtidas] = useState(101)
  const [preencher, setPreencher] = useState(false)
  const x = 101
  
    return (
      <>
      <div className="conteudo">
      <img data-test="post-image" onDoubleClick={() => setCurtidas(adicionarCurtida(curtidas, x))} src={props.imagePost} alt={props.nomeImagem}/>
      </div>
        <div className="fundo">
        <div className="acoes"> 
          <div>
            <ion-icon data-test="like-post" onClick={() => setCurtidas(adicionarCurtidas(curtidas, x))} class={`${curtidas==101 ? "" : "vermelho"}`} name={`heart${curtidas==101 ? "-outline" : ""}`}></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon onClick={() => setPreencher(preencherSalvar(preencher))}data-test="likes-number" name={`bookmark${preencher==false ? "-outline" : ""}`}></ion-icon>
          </div>
        </div>
        <div className="curtidas">
          <img src={props.imageCurtidas} alt={props.nomeCurtidas}/>
          <div data-test="save-post" className="texto">
            Curtido por <strong>{props.nomeCurtidas}</strong> e <strong>outras {curtidas} pessoas</strong>
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

function adicionarCurtida(curtidas, x){    
  console.log(curtidas)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
  if(x+1==curtidas){
    return curtidas
  }
  return curtidas+1
}

function preencherSalvar(preencher){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
  if(preencher==false){
    return true
  }
  return false
}