import { ComputadoraBuilder } from "./computadoraBuilder";

export class Computadora {
  private procesador?: string;
  private ram?: string;
  private almacenamiento?: string;
  private tarjetaGrafica?: string;
  private sistemaOperativo?: string;

  constructor(builder: ComputadoraBuilder) {
    this.procesador = builder.getProcesador();
    this.ram = builder.getRam();
    this.almacenamiento = builder.getAlmacenamiento();
    this.tarjetaGrafica = builder.getTarjetaGrafica();
    this.sistemaOperativo = builder.getSistemaOperativo();
  }

  public toString(): string {
    return `
Procesador: ${this.procesador ?? "No especificado"}
RAM: ${this.ram ?? "No especificada"}
Almacenamiento: ${this.almacenamiento ?? "No especificado"}
Tarjeta Gráfica: ${this.tarjetaGrafica ?? "No especificada"}
Sistema Operativo: ${this.sistemaOperativo ?? "No especificado"}
    `;
  }
}
