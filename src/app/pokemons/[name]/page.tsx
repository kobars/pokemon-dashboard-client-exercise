"use client";

import PokemonCard from "@/components/Card";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import useAuth from "@/hooks/useAuth";
import usePokemonData from "@/hooks/usePokemonData";
import { useParams } from "next/navigation";

const PokemonDetailPage = () => {
  const params = useParams<{ name: string }>();
  const { user, logout } = useAuth();
  const { pokemons } = usePokemonData();

  const pokemon = pokemons.find(
    (pokemon) => pokemon.name.toLocaleLowerCase() === params.name
  );

  if (!params.name || !pokemon)
    return (
      <Container>
        <Navbar pageTitle="Pokemon Detail" name={user.name} onLogout={logout} />
        <h1>Invalid Pokemon Name</h1>
      </Container>
    );

  return (
    <Container>
      <Navbar pageTitle={pokemon.name} name={user.name} onLogout={logout} />
      <PokemonCard pokemon={pokemon} />
    </Container>
  );
};

export default PokemonDetailPage;
