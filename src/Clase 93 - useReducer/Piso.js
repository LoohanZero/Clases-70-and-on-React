import React, {useContext} from "react";
import AscensorContext from "./contexts/AscensorContext"


const Piso = ({ numero }) => {
    const {elegirPiso, dispatchAscensor} = useContext(AscensorContext)

    const llamandoAscensor = () => dispatchAscensor(elegirPiso(numero))

  return (
    <div>
      <button onClick={llamandoAscensor}>Llamar Ascensor</button>
      <p>Piso {numero}</p>
    </div>
  );
};

export default Piso;
