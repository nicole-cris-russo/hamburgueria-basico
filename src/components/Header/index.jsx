import { Logo } from "../Logo";
import { Input } from "../Input";
import { Container, Section } from "./styles.js";

export const Header = () => {
  return (
    <Container id="Header">
      <Section>
        <Logo></Logo>
      </Section>
      <Section>
        <Input></Input>
      </Section>
    </Container>
  );
};
