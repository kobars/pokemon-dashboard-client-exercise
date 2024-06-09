import { Pokemon } from "@/types";

const PokemonCard = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <div
      key={pokemon.id}
      className="max-w-xs w-60 h-80 rounded-lg overflow-hidden shadow-lg m-4 flex flex-col border border-gray-200"
    >
      <div className="flex justify-center items-center p-8 h-2/3">
        <img
          className="max-h-full max-w-full"
          width={200}
          height={200}
          src={pokemon.img}
          alt={pokemon.name}
        />
      </div>
      <div className="px-6 py-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="font-bold text-xl mb-2">{pokemon.name}</div>
          <p className="text-gray-700 text-base">{pokemon.type}</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
