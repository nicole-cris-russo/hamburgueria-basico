import { useForm } from "react-hook-form";
import { Form } from "./styles.js";

export const Input = ({ setValueInput }) => {
  const { handleSubmit, register, watch } = useForm()
  const submitData = (data) => {
    const value = watch("value", "")
    setValueInput(value)
  }

  const value = watch("value", "")
  console.log(value)
  return (
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
  );
};
