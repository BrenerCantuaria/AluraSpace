/* eslint-disable react/prop-types */
import open from "./open.png"
import favorito from "./favorito.png"

// eslint-disable-next-line react/prop-types
export default function CardMount({foto,styles}) {
  return (
    <div>
      
      <li key={foto.id} className={styles.galeria__card}>
        <img
          className={styles.galeria__imagem}
          src={foto.imagem}
          alt={foto.titulo}
        />
        <p className={styles.galeria__descricao}>{foto.titulo}</p>
        <div>
          <p>{foto.creditos}</p>
          <span>
            <img src={favorito} alt="icone curtir" />
            <img src={open} alt="Abrir modal" />
          </span>
        </div>
      </li>
    </div>
  );
}
