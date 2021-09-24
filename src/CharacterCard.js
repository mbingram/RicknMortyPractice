import React, { useState } from 'react'

export default function CharacterCard({ character }) {
    const { name, status, species, image, episode, location, origin } = character
    const [isShown, setIsShown] = useState(false);
    const toggleClass = isShown === true ? 'hover-info' : 'airline-info';

    return (
    <div
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        className="character-card"
        >
            <div className="card-content"
                style={{backgroundImage: `url(${image})`}}>
            {/* <div className="image">
                <img alt="alt" src={image} />
            </div> */}
            <div className="character-info">
                <p className="name">{name}</p>
                {isShown && (
                    <div className={toggleClass}>
                        <p className="species">Species: {species}</p>
                        <p className="origin">Origin: {origin.name}</p>
                        <p className="location">Current Location: {location.name}</p>
                        <p className="status">Status: {status}</p>
                        {/* <p className="episode">Episodes: {episode}</p> */}
                    </div>
                )}
            </div>
    </div>
    </div>
    )
}
