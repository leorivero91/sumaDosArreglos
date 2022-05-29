//Algoritmo suma dos arreglos

let arreglo1: number[] = new Array(6);
let nro: number, indice: number;

for (indice = 0; indice < 6; indice++) {
  // lo ideal seria usar arreglo1.length ya que si necesitas cambiar la cantidad de elementos solo cambias en la primer asignacion y no en el resto del codigo.
  nro = Number(
    prompt(
      `Ingrese el número que desea incorporar en la posición ${indice} del primer arreglo: `
    )
  );
  arreglo1[indice] = nro;
} //se toman los primeros 6 valores que formaran parte del primer arreglo
for (indice = 0; indice < 6; indice++) {
  console.log(
    `El número en la posición ${indice} del primer arreglo es ${arreglo1[indice]}`
  );
} //se mostraran por consola los numeros ingresados
let arreglo2: number[] = new Array(6);
for (indice = 0; indice < 6; indice++) {
  nro = Number(
    prompt(
      `Ingrese el número que desea incorporar en la posición ${indice} del segundo arreglo: `
    )
  );
  arreglo2[indice] = nro;
} //se toman los 6 valores que formaran parte del segundo arreglo
for (indice = 0; indice < 6; indice++) {
  console.log(
    `El número en la posición ${indice} del segundo arreglo es ${arreglo2[indice]}`
  );
} //se mostraran por consola los numeros ingresados
let sumaDosArreglos: number[] = new Array(6);
for (indice = 0; indice < 6; indice++) {
  sumaDosArreglos[indice] = arreglo1[indice] + arreglo2[indice];
} //se realizan las sumas de los numeros ingresados en cada arreglo
for (indice = 0; indice < 6; indice++) {
  console.log(
    `El resultado es ${arreglo1[indice]}+${arreglo2[indice]}=${sumaDosArreglos[indice]}`
  );
} // se muestra por consola las sumas y los resultados
//Es correcta la solucion,  se puede mejorar con funciones
