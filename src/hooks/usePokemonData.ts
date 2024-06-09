"use client";

import { Pokemon } from "@/types";
import { addData, editData, getData, removeData } from "@/utils/storage";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const STORAGE_KEY = "pokemons";

const usePokemonData = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const router = useRouter();

  const getPokemons = () => {
    const data = getData(STORAGE_KEY);
    setPokemons(data);
  };

  const addPokemon = (pokemon: Pokemon) => {
    addData(STORAGE_KEY, pokemon);
    getPokemons();
  };

  const editPokemon = (id: string, pokemon: Pokemon) => {
    editData(STORAGE_KEY, id, pokemon);
    getPokemons();
  };

  const removePokemon = (id: string) => {
    removeData(STORAGE_KEY, id);
    getPokemons();
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    getPokemons();
  }, [router]);

  return { pokemons, addPokemon, editPokemon, removePokemon };
};

export default usePokemonData;
