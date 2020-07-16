// const reducer = (state, action) => {
//     switch (action.type) {
//       case "TOGGLE":
//         return { on: !state.on };
//       case "PRENDER":
//         return { on: true };
//       case "APAGAR":
//         return { on: false };
//       default:
//         throw new Error();
//     }
//   };
const ASCENSOR_ACTIONS = {
  PLANTA_BAJA: "PLANTA_BAJA",
  SUBIR_PISO: "SUBIR_PISO",
  BAJAR_PISO: "BAJAR_PISO",
  ULTIMO_PISO: "ULTIMO_PISO",
  ELEGIR_PISO: "ELEGIR_PISO",
  EMERGENCIA: "EMERGENCIA",
};

const pisoInicial = { piso: 0, emergencia: false };

const plantaBaja = () => ({ type: ASCENSOR_ACTIONS.PLANTA_BAJA });
const subirPiso = () => ({ type: ASCENSOR_ACTIONS.SUBIR_PISO });
const bajarPiso = () => ({ type: ASCENSOR_ACTIONS.BAJAR_PISO });
const ultimoPiso = () => ({ type: ASCENSOR_ACTIONS.ULTIMO_PISO });
const elegirPiso = (piso) => ({
  type: ASCENSOR_ACTIONS.ELEGIR_PISO,
  payload: piso,
});
const emergencia = () => ({ type: ASCENSOR_ACTIONS.EMERGENCIA });

const ascensor = (state, action) => {
  switch (action.type) {
    case ASCENSOR_ACTIONS.EMERGENCIA:
      return { ...state, emergencia: !state.emergencia };
    case ASCENSOR_ACTIONS.PLANTA_BAJA:
      return { ...state, piso: !state.emergencia ? 0 : state.piso };
    case ASCENSOR_ACTIONS.SUBIR_PISO:
      return {
        ...state,
        piso:
          state.piso < 10 && !state.emergencia ? state.piso + 1 : state.piso,
      };

    case ASCENSOR_ACTIONS.BAJAR_PISO:
      return {
        ...state,
        piso: state.piso > 0 && !state.emergencia ? state.piso - 1 : state.piso,
      };

    case ASCENSOR_ACTIONS.ULTIMO_PISO:
      return { ...state, piso: !state.emergencia ? 10 : state.piso };
    case ASCENSOR_ACTIONS.ELEGIR_PISO:
      return {
        ...state,
        piso:
          action.payload >= 0 && action.payload <= 10 && !state.emergencia
            ? action.payload
            : state.piso,
      };

    default:
      throw new Error();
  }
};

export {
  pisoInicial,
  plantaBaja,
  subirPiso,
  bajarPiso,
  ultimoPiso,
  elegirPiso,
  ascensor,
  emergencia,
};
