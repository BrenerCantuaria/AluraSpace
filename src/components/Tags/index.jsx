/* eslint-disable react/prop-types */
import style from "./Tags.module.scss"
import fotos from "../Gallery/fotos.json"

// eslint-disable-next-line react/prop-types
export default function Tags({tags,filtraFotos,setItens}) {
  return (
    <div className={style.tags}>
      <p>Filtre por tags:</p>
      <ul className={style.tags__lista}>
        {tags.map(tag=>{
          return(
            <li key={tag} onClick={()=>filtraFotos(tag)}>{tag}</li>
          )
        })}
        <li onClick={()=> setItens(fotos)}>Todas</li>
      </ul>
    </div>
  )
}
