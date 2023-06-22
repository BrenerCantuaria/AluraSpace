import home from "../../assets/home.png"
import maisCurtidas from "../../assets/maiscurtidas.png"
import maisVistas from "../../assets/maisvistas.png"
import novas from "../../assets/novas.png"
import surpreendame from "../../assets/surpreeendame.png"
import styles from "./Menu.module.scss"


export default function Menu() {
  return (
    <nav className={styles.menu}>
        <ul className={styles.menu__lista}>
            <li className={styles.menu__item}>
                <img src={home} alt="" />
                <a href="/">Início</a>
            </li>
             <li className={styles.menu__item}>
                <img src={maisCurtidas} alt="" />
                <a href="/">Mais curtidas</a>
            </li>
            
            <li className={styles.menu__item}>
                <img src={maisVistas} alt="" />
                <a href="/">Mais vistas</a>
            </li>
            
            <li className={styles.menu__item}>
                <img src={novas} alt="" />
                <a href="/">Novas</a>
            </li>
            
            <li className={styles.menu__item}>
                <img src={surpreendame} alt="" />
                <a href="/">Surpreenda-me</a>
            </li>
        
        </ul>
    </nav>
  )
}
