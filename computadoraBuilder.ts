import { Computadora } from "./computadora";

export class ComputadoraBuilder {
  private pProcesador?: string;
  private pRam?: string;
  private pAlmacenamiento?: string;
  private pTarjetaGrafica?: string;
  private pSistemaOperativo?: string;

  public setProcesador(pProcesador: string): this {
    this.pProcesador = pProcesador;
    return this;
  }

  public setRam(pRam: string): this {
    this.pRam = pRam;
    return this;
  }

  public setAlmacenamiento(pAlmacenamiento: string): this {
    this.pAlmacenamiento = pAlmacenamiento;
    return this;
  }

  public setTarjetaGrafica(pTarjetaGrafica: string): this {
    this.pTarjetaGrafica = pTarjetaGrafica;
    return this;
  }

  public setSistemaOperativo(pSistemaOperativo: string): this {
    this.pSistemaOperativo = pSistemaOperativo;
    return this;
  }

  public build(): Computadora {
    return new Computadora(this);
  }

  public getProcesador(): string | undefined {
    return this.pProcesador;
  }
  public getRam(): string | undefined {
    return this.pRam;
  }
  public getAlmacenamiento(): string | undefined {
    return this.pAlmacenamiento;
  }
  public getTarjetaGrafica(): string | undefined {
    return this.pTarjetaGrafica;
  }
  public getSistemaOperativo(): string | undefined {
    return this.pSistemaOperativo;
  }
}
