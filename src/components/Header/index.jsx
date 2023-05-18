import { Logo } from "../Logo";
import { Input } from "../Input";
import { Container, Section } from "./styles.js";

export const Header = ({ setValueInput }) => {
  return (
    <Container id="Header">
      <Section>
        <Logo></Logo>
      </Section>
      <Section>
        <Input setValueInput={setValueInput}></Input>
      </Section>
    </Container>
  );
};
