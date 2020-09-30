/*var nombre = prompt('Cual es tu nombre?')
        document.getElementById('mensaje').innerHTML = `Bienvenido ${nombre}`;
        console.log('Que tal?');
        console.table([1,2,3]);
        console.time('Hola');
        console.error('Hubo un error');
        console.warn('Cuidado');
        console.error('Hubo un error');
        console.warn('Cuidado');
        console.error('Hubo un error');
        console.warn('Cuidado');
        console.error('Hubo un error');
        console.warn('Cuidado');
        console.timeEnd('Hola');*/

//console.log('Funciona');

var nombreCliente = 'Pedro'; //camelCase * Este es el que se recomienda en JS Nunca empezar con numeros y no se usan caracteres extranhos.
var nombre_cliente = 'Juan'; //underscore
var NombreCliente = 'Day'; //pascal case

//Split va a dividir una cadena de texto
let nombre;
let actividad = 'Estoy aprendiendo JS con el curso';
//nombre = actividad.split(' ');
//console.log(nombre);

//Reemplazar un valor
/*let nombre = actividad.replace('JS', 'Javascript');
console.log(nombre);*/

//Includes revisa que algo exista
/*let email = 'correo@gmail.com';
nombre = email.includes('@');
console.log(nombre);*/

//Repetir un string:
let master = 'Master ',
    puppets = 'Of puppets';


/**Convertir de string a Number**/
console.log (master.repeat(3));
console.log(puppets);

let n1 = 50,
    n2 = "10",
    n3 = "tres",
    n4 = "20.20";

console.log(n1 + n2);
console.log(n1 - n2);
console.log(Number(n2) + n1);
console.log( parseInt(n4) + n1);
console.log(Number(n3)); //n3 es un string: Tres

let dato;
dato = Number("20");
dato = Number("-20.20");
dato = Number(true);
dato = Number(false);
dato = Number(null);
dato = Number("Hola Mundo");
dato = Number([1,2,3,4]);

//parseInt y ParseFloat
dato = parseInt("100");
dato = parseInt("100.20");
dato = parseFloat("100");
dato = parseFloat("100.20");
console.log(dato);

//To fixed
let num1 = "10120180.12100123021";
let num2 = 10120180.12100123021;
console.log(Number(num1).toFixed(5));
console.log(num2.toFixed(5));

/**Convertir de Number a string
let dat = 237892783827;
let year = 19821;

dato = string(dat);
dato = string(year);

console.log(dato);
console.log(dato.lengh); **/

/**Arrays**/
const meses = new Array ('enero', 'febrero', 'marzo');

meses.push('abril');//push agrega al  final del arreglo
meses.push('mayo');
meses.unshift('mes 0'); //Agrega al inicio del arreglo
meses.pop(''); //Elimina al final del arreglo
meses.shift();  //Elimina del principio del arreglo
meses.splice(0, 2); //Eliminar de un rango del arreglo
meses.reverse(); //Cambia el orden del arreglo, el primer valor lo pone al final y el ultimo al principio.

let frutas = ['platano', 'manzana', 'fresa', 'uva'];
frutas.sort();
console.log(frutas);

console.log(meses);

/****Objetos****/

const persona = {
    nombre: 'Juan',
    apellido: 'Batista',
    edad: 50,
    trabajo: true,
    musica: ['salsa', 'rap', 'RNB'],
    hogar : {
        ciudad: 'Londres',
        pais: 'GB'
    }
}

console.log(persona.edad);
console.log(persona.musica[1]);
console.log(persona.hogar.pais);

// Template strings
const name = 'Juan',
      job = 'Web Dev';

console.log('Nombre: ' + name + ', Trabajo: ' + job); //Seria lo mismo que:
console.log(`Nombre: ${name}, Trabajo: ${job}`); // Template strings ok

const contenedorApp = document.querySelector('#mensaje');

let html = '<ul>' +
                '<li>Nombre1: ' + name + '</li>' +
                '<li>Trabajo1: ' + job + '</li>' +
            '</ul>';

// Template strings more complicated
let html2 = `<ul> 
                <li>Nombre2: ${name}</li>
                <li>Trabajo2: ${job}</li>
            </ul>`;            

//contenedorApp.innerHTML = html;
contenedorApp.innerHTML = html2;


/*Funciones*/
alert();
prompt(); 

//****Function Declaration - Se puede llamar la funcion antes de declararla

saludar('Dany', 'Desarrollador Web');

function saludar(nombre3 = 'Visitante', trabajo3 = 'No se sabe'){ //Pasando paramentros por defecto en la declaracion de la funcion
    console.log('Hola ' + nombre3 + ', Tu trabajo es: ' + trabajo3);
}
//Reutilizar codigo - llamar a la funcion muchas veces.
saludar('Buty', 'Corredor de seguros');
saludar('Pedry', 'Manager');
saludar('Vei');

//****Function expression - No se puede llamar la funcion antes de declararla
const suma = function(a=0,b=0){ //Pasando paramentros por defecto en la declaracion de la funcion
    console.log(a+b);
}
suma();
suma(20, 30);
suma(200, 300);

//**** IIFE */ Funcion auto invocada - Declaracion basica
(function(){
    console.log('Aqui estoy!')
})();

//Pasandole paramentros: Se pone la variable dentro del primer parentesis y el paramentro dentro del ultimo.
(function(tecnologia){
    console.log('Aqui estoy!, Aprendiendo mas ' + tecnologia)
})('JS');


//***** Metodos - Funcion dentro de un objeto */

const musica = {
    reproducir: function (cancion) {
        console.log('Reproduciendo la cancion: ' + cancion);
    },
    pausar: function() {
        console.log('Paused ...')
    }
}

musica.reproducir('ChieChie');
musica.pausar();
musica.reproducir('La Cueva');

// Los metodos tambien pueden ir por fuera
musica.borrar = function (id){
    console.log('Borrando la cancion con el ID: ' + id);
}
musica.borrar(121);

/**Funciones que retornan valores y Arrow Functions **/

const suma1 = (a = 0, b = 0) => {
    return a + b;
}
const multiplicar = (c) => { /*Cuando en un arrow function pasas un solo parametro, puedes quitar los parentesis*/
    return c * 5;
}

let total;
let resultadoSuma = suma1(1, 3);
total = multiplicar (resultadoSuma);
 console.log(total);

/**Arrow function - Nueva forma de crear funciones/ mas compacta y resumida**/
const suma2 = (x, y) => x + y;
const mult2 = w => w * 10; 

let total2;
let resultadoSuma2 = suma2(1, 4);
total2 = mult2 (resultadoSuma2);
 console.log(total2);


 /*Otro ejemplo - Primero Function Expression:

 let viajando = function (destino) {
     return 'Viajando a ' + destino;
 }

 let viaje;
 viaje = viajando ('Londres');
 viaje = viajando ('Paris');

 console.log(viaje);*/

 /*Lo mismo con Arrow Function*/
let viajando = destino => 'Viajando a ' + destino;
let viaje;
viaje = viajando ('Londres');
viaje = viajando ('Paris');
console.log(viaje);

/**Objetos  **/
/**Object literal**/
const persona4 = {
    nombre: 'Juan',
    edad: 80,
    anhoNacimiento: function() {
        return new Date().getFullYear() - this.edad;
    }
}
console.log(persona4.anhoNacimiento());

/**Object Constructor**/
function Tarea(nombre4, urgencia) {
    this.nombre4 = nombre4;
    this.urgencia = urgencia;
}
/**Crear nueva tarea**/
const tarea1 = new Tarea('Aprender JS', 'Urgente');
const tarea2 = new Tarea('Hacer cafe', 'Urgente');
const tarea3 = new Tarea('Pasear perro', 'media');
const tarea4 = new Tarea('Aprender React', 'Urgente');

console.log (tarea1);
console.log (tarea2);
console.log (tarea3);
console.log (tarea4);

/**Usando Clases**/
class Tarea1 {
    constructor(nombre5, urgencia1) {
    this.nombre5 = nombre5;
    this.urgencia1 = urgencia1;
    }
}

/**Fechas**/
const diaHoy = new Date();

let valor = diaHoy;
//Retorna el numero del mes: 0=Enero
valor=diaHoy.getMonth();
//Retorna el numero del dia: 0=Domingo
valor=diaHoy.getDay();

//Retorna el numero del dia del mes
valor=diaHoy.getDate();
//minutos de la hora
valor=diaHoy.getMinutes();
//Horas del dia
valor=diaHoy.getHours();
//timestamp
valor=diaHoy.getTime();

//año actual
valor = diaHoy.getFullYear();
valor = diaHoy.setFullYear(1998);
valor = diaHoy.getFullYear();
console.log(valor);

//new date es igual a Mes, Dia y Año
const unDia=new Date('1-5-1987');
let valor1;
valor1=unDia.getDay();
console.log(valor1);

//Condicionales - if, ifelse, else *-> Esto te lo sabes
//Operador && y || y el Ternario

let hora = 20;

if (hora > 0 && hora <= 12) {
    console.log('Buenos dias');
} else if (hora > 12 && hora <= 18) {
    console.log('Buenas tardes');
} else if (hora  > 18 && hora <= 24) {
    console.log('Buenas noches');
} else {
    console.log('Horario no valido');
}

//Ternario
let logueado = true;
console.log( logueado ? 'Si se logueo' : 'No se logueo');

//Switch - Es como muchas condiciones if
const metodoPago = 'efectivo';

switch (metodoPago) {
    case 'efectivo':
        hola();
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'cheque':
        console.log(`Pagaste con ${metodoPago} revisaremos que tenga fondos`);
        break;
    case 'tarjeta':
        console.log(`Pagaste con ${metodoPago} espere un momento`);
        break;
    default:
        console.log('Aun no has pagado o metodo no valido');
        break;
}

function hola() {
    console.log('Hola amigo,');
}

//Loops o iteradores - Funcion que corre hasta que una condicion se cumple

//For Loop
for (let i = 0; i < 10; i++) {
    console.log(`Numero: ${i}`);    
}

//While Loop
let h = 10;
while (h<=10) {
    console.log(h);
    h++;
}
//Do While Loop - No se usa mucho en JS
let k=11;
do {
    console.log (k);
    k++;
} while (k<10);

//Arreglo
const pend = ['tarea', 'comer', 'JS'];

//Arreglo con Objetos
const carrito = [
    {id: 1, prod: 'libro'},
    {id: 2, prod: 'cama'},
    {id: 3, prod: 'disco'}
];

//Objeto
let automovil = {
    modelo: 'TT',
    motor: '6.0',
    anho: 1985,
    marca:'audi'
}

/*for (let q = 0; q < pend.length; q++) {
    console.log (pend[q]);
}*/

//Otra forma de declarar un Ciclo For para arreglos
/*for(p of pend) {
    console.log(p);
}
for(prod of carrito) {
    console.log(prod.prod);
}*/

//Otra forma de declarar un Ciclo For para Objetos
/*for(info of Object.values(automovil)) {
    console.log(info);
}*/

//Foreach ***************

/*pend.forEach(function(tarea) {
    console.log(tarea);
});*/

//ForEach con Arrow Function

/*pend.forEach(tarea => {
    console.log(tarea);
});

//Map con arrow function -  crea una copia del arreglo o lo que esta iterando

pend.map(tarea => {
    console.log(tarea);
});*/

let nuevoArreglo = pend.forEach(tarea =>{

});
let nuevoArreglo2 = pend.map(tarea =>{
    //return tarea;
});
console.log(nuevoArreglo);
console.log(nuevoArreglo2);

//***Volver a ver los forEach y los Maps:
//Esto aun no me queda del todo clearTimeout.

 //**Scope -> ok



//****Object Destructuring - Para llamar o sacar las variables del objeto
const cliente = {
    nombrex:'Ale',
    tipo: 'Premium',
    datos: {
        ubicacion:{
            ciudad:'Havana',
        pais:'Cuba'
        }, 
        cuenta: {
            desde:'10/12/2019',
            saldo:'10000'
        }      
    }    
}
console.log (cliente);

//Crear las variables
/*const nombreCliente1 = cliente.nombrex,
      tipoCliente1 = cliente.tipo,
      ubicacionCliente = cliente.datos.ubicacion;

console.log(nombreCliente1, ubicacionCliente);*/

// **Con Object Destructuring:
let{nombrex, tipo} = cliente;
let {datos:{ubicacion : {ciudad}}} = cliente;
let {datos:{cuenta:{saldo}}} = cliente;
console.log(nombrex, tipo, ciudad, saldo); // Print: {nombrex: "Ale", tipo: "Premium", }
//Nota: esto facilita mucho la extraccion de datos de los objetos.

//*** Object Literal Enhacement */ Hace lo contrario de Destructuring. Arma o junta los elementos del objeto.

const banda = 'Al2',
      genero = 'ra',
      canciones = ['Ego', 'Chie', 'Aldo'];

const al2 = {banda, genero, canciones}

console.log(al2);
