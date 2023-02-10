import arrayDePosts from "./arrayPosts";
import Conteudo from "./conteudo";
import Fundo from "./fundo";
import Usuario from "./usuario";

export default function Posts(){

    return <div class="posts">
      {arrayDePosts.map(a => {
      return <div class="post">
      <Usuario usuario={a.usuario} imagem={a.imagem}/>
      <Conteudo imagePost={a.imagePost} nomeImagem={a.nomeImagem}/>
      <Fundo imageCurtidas={a.imageCurtidas} nomeCurtidas={a.nomeCurtidas}/>
      </div>
    }
      )}
  </div>
}