import arrayDeSugestoes from "./arraydesugestoes"
import Sugestao from "./sugestao"

export default function Sugestoes(){
    return (
        <div className="sugestoes">
        <div className="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
        {arrayDeSugestoes.map(objeto => <Sugestao nome={objeto.nomeSugestao} imagem={objeto.imagemSugestao} segue={objeto.segue}/>)}   
      </div>
    )
}