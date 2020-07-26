import React from "react";
import Button from "Tarea 74/components/button/Button";
import Container from "Tarea 74/components/container/Container";
// import Icon from "Tarea 74/components/icon/Icon";
import Tag from "Tarea 74/components/tag/Tag";
import Text from "Tarea 74/components/text/Text";
import Title from "Tarea 74/components/title/Title";

function App() {
  return (
    <Container>
      <Title as="h1">Soy un título h1</Title>
      <Button  >Apretame</Button>
      {/* <Icon name="star" /> */}
      <Container>
      <Tag>Soy un span</Tag>
      <Tag>Soy otro span</Tag>
      <Text>Soy alto texto, loco</Text>
      </Container>
    </Container>
  );
}

export default App;
