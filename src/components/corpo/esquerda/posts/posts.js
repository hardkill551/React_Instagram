import arrayDePosts from "./arrayPosts";
import Conteudo from "./conteudo";
import Usuario from "./usuario";

export default function Posts(){

    return <div className="posts">
      {arrayDePosts.map(a => {
      return <div data-test="post"className="post">
      <Usuario key={a.usuario} usuario={a.usuario} imagem={a.imagem}/>
      <Conteudo key={a.usuario} imagePost={a.imagePost} nomeImagem={a.nomeImagem} imageCurtidas={a.imageCurtidas} nomeCurtidas={a.nomeCurtidas}/>
      </div>
    }
      )}
  </div>
}