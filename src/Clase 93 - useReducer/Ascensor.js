import React, { useContext } from "react";
import AscensorContext from "./contexts/AscensorContext";

const Ascensor = () => {
  const {
    pisoElegido,
    dispatchAscensor,
    plantaBaja,
    subirPiso,
    bajarPiso,
    ultimoPiso,
    elegirPiso,
    emergencia,
  } = useContext(AscensorContext);

  const irAPlantaBaja = () => dispatchAscensor(plantaBaja());
  const subirUnPiso = () => dispatchAscensor(subirPiso());
  const bajarUnPiso = () => dispatchAscensor(bajarPiso());
  const irAUltimoPiso = () => dispatchAscensor(ultimoPiso());
  const irADeterminadoPiso = (event) => {
    if (event.charCode === 13) {
      dispatchAscensor(elegirPiso(event.target.value));
    }
  };
  const toggleFuncionamientoAscensor = () => dispatchAscensor(emergencia())

  return (
    <div>
      <button onClick={irAPlantaBaja}>Ir a Planta Baja</button>
      <button onClick={subirUnPiso}>Subir un Piso</button>
      <button onClick={bajarUnPiso}>Bajar un Piso</button>
      <button onClick={irAUltimoPiso}>Ir al último Piso</button>
      <input type="number" min={0} max={10} onKeyPress={irADeterminadoPiso} />

      <button onClick={toggleFuncionamientoAscensor}>Emergencia</button>

      {<h1>{pisoElegido.piso}</h1>}
    </div>
  );
};

export default Ascensor;
