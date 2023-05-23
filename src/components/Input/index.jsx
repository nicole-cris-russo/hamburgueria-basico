import { useForm } from "react-hook-form";
import { Form } from "./styles.js";
import { useContext } from "react";
import { ProductContext } from "../../contexts/productContext.js";

export const Input = () => {
  const { handleSubmit, register, watch } = useForm()
  const { setValueInput } = useContext(ProductContext)

  const submitData = (data) => {
    const value = watch("value", "")
    setValueInput(value)
  }

  return (
    <>
      <Form onSubmit={handleSubmit(submitData)}>
        <input 
        id="valueInput" 
        type="text" 
        placeholder="Digitar Pesquisa" 
        {...register("value")}
        />
        <button type="submit">
          Pesquisar
        </button>
      </Form>
    </>
  );
};
