import { PokemonResponse, SimplePokemon } from "@/app/pokemons";
import Image from 'next/image'
const getPokemons = async (limit=20, offset=0): Promise<SimplePokemon[]> => {
    const data: PokemonResponse =await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(res => res.json());

    const pokemons = data.results.map(pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name,
    }))
    return pokemons;
}


export default async function PokemonsPage() {

    const pokemons = await getPokemons(151);
  return (
    <div className="flex flex-col">
     <div className="flex flex-wrap gap-10 items-center justify-center">
      { pokemons.map( pokemon => (
          
        <Image width={50} height={50} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt={pokemon.name} key={pokemon.id} 
        />
           
        ))
      } 

     </div>
    </div>
  );
}