import { Pokemon } from "@/types";

interface PokemonTableProps {
  pokemons?: Pokemon[];
  onEditClick: (id: string) => void;
  onDeleteClick: (id: string) => void;
}

const PokemonTable = (props: PokemonTableProps) => {
  const { pokemons = [], onDeleteClick, onEditClick } = props;

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th className="text-left">ID</th>
            <th className="text-left">Name</th>
            <th className="text-left">Type</th>
            <th className="text-left">Image</th>
            <th className="text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {pokemons.map((pokemon: Pokemon) => (
            <tr key={pokemon.id}>
              <td>{pokemon.id}</td>
              <td>{pokemon.name}</td>
              <td>{pokemon.type}</td>
              <td>
                <img
                  src={pokemon.img}
                  alt={pokemon.name}
                  width={50}
                  height={50}
                />
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <button
                    className="btn btn-sm btn-blue"
                    onClick={() => onEditClick(pokemon.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-red"
                    onClick={() => onDeleteClick(pokemon.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PokemonTable;
