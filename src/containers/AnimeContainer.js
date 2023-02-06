import { useState } from "react"
import Pokemon from "../components/Pokemon"
import QuoteList from "../components/QuoteList"

const AnimeContainer= () => {

    const [quotes, setQuotes] = useState([])

    const [pokemon, setPokemon] = useState()


const onClickHandlerAnime = async() => {
    const response = await fetch("https://animechan.vercel.app/api/quotes");
        const data = await response.json();
        console.log(data);
        setQuotes(data);
}
const onClickHandlerPokemon = async() => {
    const rdmPokeId = Math.floor(Math.random() * 100) + 1;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${rdmPokeId}`);
        const data = await response.json();
        console.log(data);
        setPokemon(data);
}



return(
    <>
    <div>
    <h2>Let's Find Out Which Character You Are!</h2>
    <button onClick={onClickHandlerAnime}>Generate Anime</button>
    {quotes&&<QuoteList quotes={quotes} />} 
    </div>
    <div>
    <h2>Which Pokemon Are You?</h2>
    {/* && means if quotes is truthy then carry out operations on the right of the && */}
    <button onClick={onClickHandlerPokemon}>Generate Pokemon</button>
    {pokemon&&<Pokemon pokemon={pokemon} />}
    </div>
    </> 
);

}

export default AnimeContainer;