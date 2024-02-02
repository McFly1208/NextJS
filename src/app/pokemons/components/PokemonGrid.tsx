import { SimplePokemon } from '@/app/pokemons'
import React from 'react'
import { PokemonCard } from './PokemonCard'

interface Props {
    pokemons: SimplePokemon[]
}

export const PokemonGrid = ({pokemons}: Props) => {
  return (
   
      <div className="flex flex-wrap gap-10 items-center justify-center">
        {pokemons.map((pokemon) => (
        //   <Image
        //     width={50}
        //     height={50}
        //     src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
        //     alt={pokemon.name}
        //     key={pokemon.id}
        //   />
<PokemonCard key={pokemon.id} simplePokemon={pokemon} />

        ))
        }
      </div>

  )
}
