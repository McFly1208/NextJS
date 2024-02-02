import Link from "next/link";
import { SimplePokemon } from "@/app/pokemons";
import Image from "next/image";
import { IoHeartOutline } from "react-icons/io5";

interface Props {
    simplePokemon: SimplePokemon;

}

export const PokemonCard = ({simplePokemon}:Props) => {

        const {id, name} = simplePokemon;
  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className=" flex justify-center items-center flex-col text-center p-6 bg-gray-800 border-b">
          
        <Image
          width={50}
             height={50}
             src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${simplePokemon.id}.svg`}
             alt={simplePokemon.name}
             key={simplePokemon.id}
           />
          
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>
       
          <div className="mt-5">
            <Link  href={`dashboard/pokemon/${id}`} className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100">
              Mas informacion
            </Link>
          </div>
        </div>
        <div className="border-b">
          <Link className="px-4 py-2 items-center hover:bg-gray-100 flex" href="/dashboard/main">
         
              <div className="text-red-600">
               <IoHeartOutline/>
              </div>
              <div className="pl-3">
                <p className="text-sm font-medium text-gray-800 leading-none">
                 No es Favorito
                </p>
                <p className="text-xs text-gray-500">View your campaigns</p>
              </div>
          
          </Link>
         
        </div>

       
        
      </div>
    </div>
  );
};
