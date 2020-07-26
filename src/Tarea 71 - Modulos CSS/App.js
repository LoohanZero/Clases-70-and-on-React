import React from "react";
import style from "Tarea 71/app.module.scss";
import PageHeader from "Tarea 71/components/PageHeader/Header";
import Aside from "Tarea 71/components/Aside/Sidebar";
import Main from "Tarea 71/components/Main/Main"
import Container from "Tarea 71/components/Container"

function App() {
  return (
    <div className={`App ${style.App}`}>
      <Aside />
      <Container className={`${style.notAsideContainer}`}>
      <PageHeader />
      <Main />
      </Container>
    </div>
  );
}

export default App;
