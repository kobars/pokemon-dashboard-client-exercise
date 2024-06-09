"use client";

import PokemonCard from "@/components/Card";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import useAuth from "@/hooks/useAuth";
import usePokemonData from "@/hooks/usePokemonData";
import Link from "next/link";

const PokemonsPage = () => {
  const { pokemons } = usePokemonData();
  const { user, logout } = useAuth();

  return (
    <Container>
      <Navbar pageTitle="Pokemons" name={user.name} onLogout={logout} />
      <div className="flex flex-wrap justify-center">
        {pokemons.map((pokemon) => (
          <Link
            href={`/pokemons/${pokemon.name.toLocaleLowerCase()}`}
            key={pokemon.id}
          >
            <PokemonCard pokemon={pokemon} />
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default PokemonsPage;
