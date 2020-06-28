
  // Uso de Let y Const (Done)
  let nombre = 'Ricardo Tapia';
  let edad = 23;

  const PERSONAJE = {
    nombre:nombre,
    edad:edad
  }


  // Cree una interfaz que sirva para validar el siguiente objeto (Done)
  interface Heroe{
    nombre:string,
    artesMarciales:string[]
  }

  var batman:Heroe = {
    nombre: 'Bruno Díaz',
    artesMarciales: ['Karate','Aikido','Wing Chun','Jiu-Jitsu']
  }

  console.log(batman);
  // Convertir esta funcion a una funcion de flecha (Done)
  function resultadoDoble( a:number, b:number ){
    return (a + b) * 2
  }

  let resultadoDobleF = (a:number, b:number) => a+b; 

  console.log(resultadoDobleF);
  // Función con parametros obligatorios, opcionales y por defecto (Done)
  // donde NOMBRE = obligatorio
  //       PODER  = opcional
  //       ARMA   = por defecto = 'arco'
  function getAvenger( nombre:string, poder?:string, arma:string = 'arco' ){
    var mensaje;
    if( poder ){
      mensaje = nombre + ' tiene el poder de: ' + poder + ' y un arma: ' + arma;
    }else{
      mensaje = nombre + ' tiene un ' + poder
    }
    console.log(mensaje);
  };

  getAvenger('Spiderman')
  // Cree una clase que permita manejar la siguiente estructura
  // La clase se debe de llamar rectangulo,
  // debe de tener dos propiedades:
  //   * base
  //   * altura
  // También un método que calcule el área  =  base * altura,
  // ese método debe de retornar un numero.


  class Rectangulo{

    constructor(public base:number,
                public altura:number){}

    calcularArea ?= ():number => this.base * this.altura;
  }

  let cuadrado:Rectangulo = {
      base:30,
      altura:20

  }

  console.log(cuadrado.calcularArea);