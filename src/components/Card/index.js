import iconeFavoritar from "./favoritar.png"
import iconeDesavoritar from "./desfavoritar.png"
import styles from "./Card.module.css";
import { useFavoritoContext } from "contexts/Favoritos";

function Card({id, titulo, capa}) {

    const {favorito, adicionarFavorito} = useFavoritoContext();
    const ehFavorito = favorito.some((fav) => fav.id === id);
    const icone = !ehFavorito ? iconeFavoritar : iconeDesavoritar;

    return(
       <div className={styles.container}>
            <img 
                className={styles.capa} 
                src={capa} 
                alt={titulo}
            />
            <h2>{titulo}</h2>
            <img 
                src={icone} 
                alt="Favoritar filme" 
                className={styles.favoritar}
                onClick={() => {
                    adicionarFavorito({id, titulo, capa});
                }}
            />
       </div> 
    );
}

export default Card;