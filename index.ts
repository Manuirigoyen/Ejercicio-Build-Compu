import { ComputadoraBuilder } from "./computadoraBuilder";
let miPc = new ComputadoraBuilder()
  .setProcesador("Intel Core i9")
  .setRam("32GB")
  .setAlmacenamiento("1TB SSD")
  .setTarjetaGrafica("NVIDIA RTX 4080")
  .setSistemaOperativo("Windows 11 Pro")
  .build();

let miPc2 = new ComputadoraBuilder()
  .setProcesador("AMD Ryzen 9")
  .setRam("64GB")
  .setAlmacenamiento("2TB SSD")
  //Si no le pasamos la tarjeta gráfica, se le asignara "no especificada". Igual con los demás atributos que no hayan sido asignados.
  .setSistemaOperativo("Linux")
  .build();

console.log("PC personalizada:");
console.log(miPc.toString());

console.log("PC personalizada 2:");
console.log(miPc2.toString());