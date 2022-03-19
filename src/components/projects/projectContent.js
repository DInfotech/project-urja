import React from 'react'
import "./Projects.css";
const cardDirectorsDat = [
    {
        id: 1,
        name: "Supply of Solar Lanterns to CRPF",
        place: "Meghalaya",
    },
    {
        id: 2,
        name: "Supply of AC LED Lights in Ardh Kumbh Mela, 2016",
        place: "Haridwar",
    },
    {
        id: 3,
        name: "Installed SPV Power Plant at Shulabh Toilet Complex",
        place: "Jharkhand",
    },
    {
        id: 4,
        name: "Installed Solar LED Street Lights in various Gram Panchayats",
        place: "Across India",
    },
    {
        id: 5,
        name: "Installed Solar Panels in various Gram Panchayats",
        place: "Across India",
    },
];

const CardListItem = (props) => {
    return (
        <div className="profilecards">
            <figcaption>
                <h3>{props.cardDirector.name}</h3>
                <h4>{props.cardDirector.place}</h4>
            </figcaption>
        </div>
    );
};

const ProjectContent = () => {
    return (
        <div>
            {cardDirectorsDat.map((cardDirector) => {
                return (
                    <CardListItem cardDirector={cardDirector} key={cardDirector.id} />
                );
            })}
        </div>
    )
}
export default ProjectContent;
