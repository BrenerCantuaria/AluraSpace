import logo from "./Logo.png"
import search from "./Lupa.png"
import styles from "./Cabecalho.module.scss"

export default function Cabecalho(){
    return (
        <header className={styles.cabecalho}>
            <img src={logo} alt="Logo do Alura Space" />

            <div className={styles.cabecalho__container}>
                <input 
                    className={styles.cabecalho__input}
                    type="text" 
                    placeholder="O que você procura ?"
                />
                <img src={search} alt="icone de busca" />
            </div>
        </header>
    )
}