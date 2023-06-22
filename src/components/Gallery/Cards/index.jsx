/* eslint-disable react/prop-types */

import CardMount from "../CardMount"

// eslint-disable-next-line react/prop-types
export default function Cards({foto,styles}) {
  return (
    <div>
       <ul className={styles.galeria__cards}>
          {foto.map((foto)=>{
              return(
                <CardMount foto={foto} styles={styles} key={foto.id}/>
              )
          })}
        </ul>
    </div>
  )
}
