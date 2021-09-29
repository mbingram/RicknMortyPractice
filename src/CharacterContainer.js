import React, { useEffect, useState } from 'react'
import CharacterCard from './CharacterCard'

export default function CharacterContainer({ characters }) {
    const [filterCharacters, setFilterCharacters] = useState([])
    const [showCharacters, setShowCharacters] = useState(characters)

    useEffect(() => {
        if(filterCharacters.length) {
            setShowCharacters(filterCharacters)

        } else {
            setShowCharacters(characters)
        }
    }, [characters, filterCharacters])

    const displayCharacters = () => showCharacters.map(character => {
        return <CharacterCard character={character} key={character.id}/>
    })

    const handleClick = (e) => {
        let statusFilter = characters.filter((character) => character.status === e.target.value)
        let removeFilter = filterCharacters.filter((character) => character.status !== e.target.value)
        let applyFilters = filterCharacters.concat(statusFilter)
        if (e.target.checked) {
            setFilterCharacters(applyFilters)
        } else {
            setFilterCharacters(removeFilter)
        }
    }

    return (
        <div>
            <p className="title">Rick and Morty Characters, broh</p>
            <p className="filter-title">Filter by Status, broh</p>
            <form className="filter">
                <input
                    id="myInput"
                    value="Alive"
                    type="checkbox"
                    onClick={handleClick}
                    />
                    <label htmlFor="myInput" className="filter-label">Alive</label>
                <input
                    id="myInput"
                    value="Dead"
                    type="checkbox"
                    onClick={handleClick}
                />
                    <label htmlFor="myInput" className="filter-label">Dead</label>
                <input
                    id="myInput"
                    value="unknown"
                    type="checkbox"
                    onClick={handleClick}
                />
                    <label htmlFor="myInput" className="filter-label">Unknown</label>
            </form>
            <div className="character-container">
                {displayCharacters()}
            </div>
        </div>
    )
}
