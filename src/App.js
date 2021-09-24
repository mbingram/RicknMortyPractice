import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import CharacterContainer from './CharacterContainer';

function App() {
  const [characters, setCharacters] = useState([]);
  const random = Math.random() * (35 - 1) + 1
  const randomPageURL = `https://rickandmortyapi.com/api/character?page=${random}`
  const apiURL = `https://rickandmortyapi.com/api/character`


  useEffect(() => {
    fetch(apiURL)
    .then(response => response.json())
    .then(data => setCharacters(data.results))
  }, [apiURL])

  const fetchRandom = () => {
    fetch(randomPageURL)
    .then(response => response.json())
    .then(data => setCharacters(data.results))
  }

  return (
    <div className="App">
      <Header fetchRandom={fetchRandom} />
      <CharacterContainer characters={characters} key={characters.length} />
    </div>
  );
}

export default App;
