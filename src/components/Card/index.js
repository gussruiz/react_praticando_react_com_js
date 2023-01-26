import styles from "./Card.module.css";
import iconeFavoritar from "./favoritar.png"

function Card({id, titulo, capa}) {
    return(
       <div className={styles.container}>
            <img 
                className={styles.capa} 
                src={capa} 
                alt={titulo}
            />
            <h2>{titulo}</h2>
            <img 
                src={iconeFavoritar} 
                alt="Favoritar filme" 
                className={styles.favoritar}
            />
       </div> 
    );
}

export default Card;