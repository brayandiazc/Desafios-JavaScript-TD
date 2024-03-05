export default class Impuesto {
  constructor(monto_bruto_anual, deducciones) {
    this._monto_bruto_anual = () => {
      return monto_bruto_anual;
    };
    this._deducciones = () => {
      return deducciones;
    };
  }

  get monto_bruto_anual() {
    return this._monto_bruto_anual;
  }

  get deducciones() {
    return this._deducciones;
  }

  set monto_bruto_anual(monto_bruto_anual_nuevo) {
    return (this._monto_bruto_anual = () => {
      return monto_bruto_anual_nuevo;
    });
  }

  set deducciones(deducciones_nuevo) {
    return (this._deducciones = () => {
      return deducciones_nuevo;
    });
  }
}
