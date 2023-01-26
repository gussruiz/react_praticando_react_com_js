import Banner from "components/Banner";
import Titulo from "components/Title";
import { useParams } from "react-router";
import videos from "json/db.json";
import styles from "./Player.module.css";
import NaoEncontrada from "pages/NaoEncontrada";

function Player() {

    const params = useParams();
    const video = videos.find((video) => {
        return video.id === Number(params.id);
    })

    if (!video) {
        return <NaoEncontrada />
    }

    return(
        <>
            <Banner imagem="player"/>
            <Titulo>
                <h1>
                    Player
                </h1>
            </Titulo>
            <section className={styles.container}>
                <iframe
                    width="560"
                    height="315"
                    src={video.link}
                    title={video.link}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </section>
        </>
    );
};

export default Player;