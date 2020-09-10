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


