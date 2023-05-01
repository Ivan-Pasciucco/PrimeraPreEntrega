class Simulador {
  constructor(
    montoInicial,
    plazo,
    tasaAnual,
    montoTotal,
    interesesGenerados,
    inflacionAnual
  ) {
    this.montoInicial = montoInicial;
    this.plazo = plazo;
    this.tasaAnual = tasaAnual;
    this.montoTotal = montoTotal;
    this.interesesGenerados = interesesGenerados;
    this.inflacionAnual = inflacionAnual;
  }

  calcMontoTotal() {
    this.montoTotal =
      this.montoInicial * (1 + ((this.tasaAnual / 100) * this.plazo) / 12);
  }

  calcularIntereses() {
    this.interesesGenerados = this.montoTotal - this.montoInicial;
  }

  calcularRentabilidad() {
    const rentabilidad =
      (1 + this.interesesGenerados / this.montoInicial) /
        (1 + this.inflacionAnual / 100) -
      1;
    return rentabilidad;
  }

  mostrarResultado() {
    alert(
      `El monto total es: $${this.montoTotal.toFixed(
        2
      )} y los intereses generados son: $${this.interesesGenerados.toFixed(
        2
      )}. La rentabilidad es del ${
        this.calcularRentabilidad().toFixed(2) * 100
      }%`
    );
  }
}

let continuar = true;

while (continuar) {
  const montoInicial = parseFloat(prompt("Ingrese el monto inicial: "));
  const plazo = parseInt(prompt("Ingrese el plazo en meses: "));
  const tasaAnual = parseFloat(prompt("Ingrese la tasa anual: "));
  const inflacionAnual = parseFloat(prompt("Ingrese la inflación anual: "));

  const simulador = new Simulador(
    montoInicial,
    plazo,
    tasaAnual,
    0,
    0,
    inflacionAnual
  );

  simulador.calcMontoTotal();
  simulador.calcularIntereses();
  simulador.mostrarResultado();

  const continuarConsulta = prompt("¿Desea realizar otra consulta? (s/n)");
  if (continuarConsulta.toLowerCase() !== "s") {
    continuar = false;
  }
}
