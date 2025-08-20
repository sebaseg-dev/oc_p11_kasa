import { useParams } from "react-router-dom";
import { Carrousel } from "../components/Carrousel.jsx";
import { useFetch } from "../hooks/useFetch.js";
import { Rating } from "../components/Rating.jsx";
import { Collapse } from "../components/Collapse.jsx";
import { NotFound } from "./404.jsx";

export function Details() {
    const { id } = useParams();
    const [loading, logement, error] = useFetch("/data/logements.json", id);

    if (error) {
        console.log("An error has been returned by useFetch : " + error);
    }

    if (logement === undefined) {
        return <NotFound />;
    }

    return (
        <>
            <main className={"details"}>
                {loading && <p>Chargement...</p>}
                {logement && (
                    <>
                        <Carrousel pictures={logement.pictures} />
                        <section className={"content"}>
                            <div className={"general-information"}>
                                <div className={"title"}>
                                    <div className={"text"}>
                                        <h1>{logement.title}</h1>
                                        <p>{logement.location}</p>
                                    </div>
                                    <div className={"tags"}>
                                        <ul>
                                            {logement.tags.map((tag) => (
                                                <li key={tag}>{tag}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className={"host"}>
                                    <div className={"host-profile"}>
                                        <p className={"host-profile-name"}>
                                            {logement.host.name.replace(
                                                " ",
                                                "\n"
                                            )}
                                        </p>
                                        <img
                                            className={"host-profile-picture"}
                                            src={logement.host.picture}
                                            alt={"profile"}
                                        />
                                    </div>
                                    <Rating>{logement.rating}</Rating>
                                </div>
                            </div>
                            <div className={"detailed-information"}>
                                <Collapse title={"Description"} isOpen={false}>
                                    {logement.description}
                                </Collapse>
                                <Collapse title={"Équipements"} isOpen={false}>
                                    {logement.equipments}
                                </Collapse>
                            </div>
                        </section>
                    </>
                )}
            </main>
        </>
    );
}
