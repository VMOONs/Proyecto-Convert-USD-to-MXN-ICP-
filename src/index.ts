import { Canister, query, float64, update, Void } from 'azle';
let cantidad = 0;

export default Canister({
  getMessage: query([], float64, () => {
    const MXN = 18.03;
    const Convertir = cantidad * MXN;
    return Convertir;
  }),

  setMessage: update([float64], Void, (newMessage) => {
    cantidad = newMessage;
  })
});