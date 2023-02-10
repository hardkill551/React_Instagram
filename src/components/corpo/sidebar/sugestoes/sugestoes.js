import arrayDeSugestoes from "./arraydesugestoes"
import Sugestao from "./sugestao"

export default function Sugestoes(){
    return (
        <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
        {arrayDeSugestoes.map(objeto => <Sugestao nome={objeto.nomeSugestao} imagem={objeto.imagemSugestao} segue={objeto.segue}/>)}   
      </div>
    )
}