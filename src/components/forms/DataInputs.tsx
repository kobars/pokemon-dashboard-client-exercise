import { ChangeEvent } from "react";
import InputText from "./InputText";

interface PokemonInputsProps {
  form: {
    name: string;
    type: string;
    image: string;
  };
  handleChangeName: (e: ChangeEvent<HTMLInputElement>) => void;
  handleChangeType: (e: ChangeEvent<HTMLInputElement>) => void;
  handleChangeImage: (e: ChangeEvent<HTMLInputElement>) => void;
}

const PokemonInputs = (props: PokemonInputsProps) => {
  const { form, handleChangeName, handleChangeType, handleChangeImage } = props;

  return (
    <>
      <InputText
        required
        value={form.name}
        type="text"
        placeholder="Name"
        onChange={handleChangeName}
      />
      <InputText
        required
        value={form.type}
        type="text"
        placeholder="Type"
        onChange={handleChangeType}
      />
      <InputText
        required
        value={form.image}
        type="text"
        placeholder="Image URL"
        onChange={handleChangeImage}
      />
    </>
  );
};

export default PokemonInputs;
