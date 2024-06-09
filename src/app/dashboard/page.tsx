"use client";

import ConfirmationDialog from "@/components/dialogs/Confirmation";
import FormDialog from "@/components/dialogs/Form";
import PokemonInputs from "@/components/forms/DataInputs";
import Navbar from "@/components/Navbar";
import PokemonTable from "@/components/Table";
import useAuth from "@/hooks/useAuth";
import usePokemonData from "@/hooks/usePokemonData";
import { Pokemon } from "@/types";
import { ChangeEvent, FormEvent, useState } from "react";

const DashboardPage = () => {
  const [form, setForm] = useState({ name: "", type: "", image: "" });
  const [isOpenDeleteConfirmation, setIsOpenDeleteConfirmation] =
    useState(false);
  const [isOpenAddDialog, setIsOpenAddDialog] = useState(false);
  const [isOpenEditDialog, setIsOpenEditDialog] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);

  const { user, logout } = useAuth();
  const { pokemons, addPokemon, editPokemon, removePokemon } = usePokemonData();

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, name: e.target.value }));
  };

  const handleChangeType = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, type: e.target.value }));
  };

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, image: e.target.value }));
  };

  const resetForm = () => {
    setForm({ name: "", type: "", image: "" });
    setSelectedPokemon(null);
  };

  const handleCancelAdd = () => {
    resetForm();
    setIsOpenAddDialog(false);
  };

  const handleOpenAddDialog = () => {
    setIsOpenAddDialog(true);
  };

  const handleOpenEditDialog = (id: string) => {
    const pokemon = pokemons.find((p: Pokemon) => p.id === id);
    if (pokemon) {
      setSelectedPokemon(pokemon);
      setForm({
        name: pokemon.name,
        type: pokemon.type,
        image: pokemon.img,
      });
      setIsOpenEditDialog(true);
    }
  };

  const handleOpenDeleteDialog = (id: string) => {
    setSelectedPokemon(pokemons.find((p: Pokemon) => p.id === id) || null);
    setIsOpenDeleteConfirmation(true);
  };

  const handleCancelDelete = () => {
    resetForm();
    setIsOpenDeleteConfirmation(false);
  };

  const handleCancelEdit = () => {
    resetForm();
    setIsOpenEditDialog(false);
  };

  const handleConfirmAdd = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addPokemon({
      id: String(Date.now()),
      name: form.name,
      type: form.type,
      img: form.image,
    });
    resetForm();
    setIsOpenAddDialog(false);
  };

  const handleConfirmEdit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedPokemon) return;
    editPokemon(selectedPokemon.id, {
      id: selectedPokemon.id,
      name: form.name,
      type: form.type,
      img: form.image,
    });
    resetForm();
    setIsOpenEditDialog(false);
  };

  const handleConfirmDelete = () => {
    if (selectedPokemon) {
      removePokemon(selectedPokemon.id);
    }
    setIsOpenDeleteConfirmation(false);
  };

  return (
    <div className="h-screen mx-auto p-8">
      <Navbar pageTitle="Dashboard" name={user.name} onLogout={logout} />
      <div className="flex justify-end mt-8">
        <button className="btn btn-blue" onClick={handleOpenAddDialog}>
          Add Pokemon
        </button>
      </div>
      <PokemonTable
        pokemons={pokemons}
        onDeleteClick={handleOpenDeleteDialog}
        onEditClick={handleOpenEditDialog}
      />
      <FormDialog
        id="add-form-dialog"
        title="Add Pokemon"
        isOpen={isOpenAddDialog}
        onSubmit={handleConfirmAdd}
        onCancel={handleCancelAdd}
      >
        <PokemonInputs
          form={form}
          handleChangeName={handleChangeName}
          handleChangeType={handleChangeType}
          handleChangeImage={handleChangeImage}
        />
      </FormDialog>
      <FormDialog
        id="edit-form-dialog"
        title={"Edit Pokemon"}
        isOpen={isOpenEditDialog}
        onSubmit={handleConfirmEdit}
        onCancel={handleCancelEdit}
      >
        <PokemonInputs
          form={form}
          handleChangeName={handleChangeName}
          handleChangeType={handleChangeType}
          handleChangeImage={handleChangeImage}
        />
      </FormDialog>
      <ConfirmationDialog
        id="delete-confirmation-dialog"
        message={`Are you sure you want to delete ${selectedPokemon?.name}?`}
        onClose={handleCancelDelete}
        onSubmit={handleConfirmDelete}
        title="Delete Pokemon"
        isOpen={isOpenDeleteConfirmation}
      />
    </div>
  );
};

export default DashboardPage;
