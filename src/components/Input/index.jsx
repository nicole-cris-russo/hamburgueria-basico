import { Form } from "./styles.js";

export const Input = ({ setValueInput }) => {
  function handleSubmit(event) {
    const form = event.target.form;
    let valueInput = form.valueInput.value;
    setValueInput(valueInput);
  }
  return (
    <Form>
      <input id="valueInput" type="text" placeholder="Digitar Pesquisa" />
      <button
        onClick={(event) => {
          event.preventDefault();
          handleSubmit(event);
        }}
      >
        Pesquisar
      </button>
    </Form>
  );
};
