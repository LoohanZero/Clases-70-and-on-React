import React, { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

function App() {
  // Hacer un componente que renderice un componente p, al que se le pueda ingresar texto, y que al clickear el texto switchee el color del mismo (p. ej.: si está en negro que pase a rojo y si está en rojo que esté en negro)
  const [color, setColor] = useState("red");

  const changeColor = (color) => {
    setColor(color);
  };

  let newColor = "";
  const Text = ({ children, onClick }) => {
    if (color === "black") {
      newColor = "red";
    } else if (color === "red") {
      newColor = "black";
    }

    return (
      <p style={{ fontSize: 30, color: newColor }} onClick={onClick}>
        {children}
      </p>
    );
  };

  // Hacer un componente Collapse, que tome children y una prop label. Inicialmente debe mostrar la label con algún ícono o emoji que indique que puede abrirse (+, 👉, ▶). Cuando se lo cliquea, debe renderizar el children y cambiar el ícono o emoji a algo que indique puede cerrarse (-, 👇, ▼). Al clickearlo nuevamente, debe expandirse (como un toggle).
  const [visible, setVisible] = useState(false);

  const showAnswer = () => {
    setVisible(!visible);
  };

  const Collapse = ({ children, label, seeAnswer }) => {
    return (
      <label style={{ fontSize: 25 }} onClick={seeAnswer}>
        {label}
        {(!visible && <GoChevronDown />) || (visible && <GoChevronUp />)}
        {visible && children}
      </label>
    );
  };

  //   Crear una miniapp que tenga varios botones con distintos precios ($50, $100, etc). Al hacer click en un botón, se debe agregar el gasto a una lista de precios, y se debe mostrar la suma total de los precios, p. ej.:
  // [+$10] [+$50] [+$100]

  // Gastos:
  // $10
  // $10
  // $50
  // $10
  // $100
  // $50

  // Total:
  // $230
  // Como desafío extra, agregarle a cada botón el nombre de un producto, que debería aparecer en la lista de gastos (p. ej.: Caramelos $10)

  const Boton = ({ children, gasto, producto }) => {
    return (
      <button
        style={{ height: 30, width: 50, margin: 5 }}
        onClick={() => {
          sumarGastos(gasto);
          agregarItem(producto, gasto);
        }}
        monto={gasto}
      >
        {children}
      </button>
    );
  };

  const [monto, setMonto] = useState(0);

  const sumarGastos = (gasto) => {
    setMonto(monto + gasto);
  };

  const Lista = ({ children }) => {
    return <ul>{children}</ul>;
  };

  const [items, setItem] = useState([]);

  const agregarItem = (producto, gasto) => {
    setItem([...items, `${producto}: $${gasto}`]);
  };
  return (
    <div className="App">
      <Text onClick={() => changeColor(newColor)}>Soy un texto</Text>
      <Collapse
        seeAnswer={showAnswer}
        label="¿Cuál es la respuesta definitiva al sentido de la vida, el universo y todo lo demás?"
      >
        <div>Es 42</div>
      </Collapse>

      <br />
      <Boton gasto={10} producto="caramelos">
        $10
      </Boton>
      <Boton gasto={20} producto="chocolate">
        $20
      </Boton>
      <Boton gasto={50} producto="alfajor">
        $50
      </Boton>
      <Boton gasto={100} producto="nesquik">
        $100
      </Boton>
      <div>
        <div style={{ fontSize: 20, paddingLeft: 100 }}>${monto}</div>
      </div>

      <Lista>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </Lista>
    </div>
  );
}

export default App;
