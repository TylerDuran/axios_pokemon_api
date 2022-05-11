import './App.css';
import React, {useState} from 'react';
import axios from 'axios';

function App() {

  const [pokemon, setPokemon] = useState([])

  const fetchPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
      .then( res => {
        // AXIOS wraps our "DATA" in data key
        console.log(res.data.results);
        setPokemon(res.data.results);
      })
      .catch( err => console.log(err))
  }
  
  return (
    <div className='App'>
      <h1>Pokemon API</h1>
      <button onClick={fetchPokemon}>Fetch Pokemon</button>
      <hr />
      {/* pokemon: {JSON.stringify(pokemon)} */}
      <div>
        {
          pokemon.map( (poke, idx) => {
            return (
              <ul key={idx}>
                <li>Name: {poke.name}</li>
              </ul>
            )
          })
        }
      </div>
    </div>
  );
}


export default App;
