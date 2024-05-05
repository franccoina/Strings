// Declaración de Strings

let comillaSimple='Wake Up, Neo';
let comillaDoble="Wake Up, 'Neo'";

console.log(comillaSimple);
console.log(comillaDoble);
console.log("");

const mensaje1=new String('Wake Up, Neo');
const mensaje2=String('Wake Up, Neo');
const mensaje3="Wake Up, 'Neo'";

// Uso de métodos

const fullName="David Blandón";
const cantCar=fullName.length;

console.log("La cantidad de caractéres es de",cantCar);
console.log("");

// Extracción de caractéres

let extLetra1=fullName[12];
let extLetra2=fullName[24];
let extLetra3=fullName.charAt(cantCar-1);

console.info(extLetra1);
console.info(extLetra2);
console.info(extLetra3);
console.log("");

// Importación de HTML

// A

let userName="David";
let userLastName="Blandón";
let userEmail="franccoina@gmail.com";

console.info("Hola mundo, mi nombre es "+userName+" "+userLastName+" y mi correo es "+userEmail);
console.info("Hola mundo, mi nombre es",userName,userLastName,"y mi correo es",userEmail);
console.info(`Hola mundo, mi nombre es ${userName} ${userLastName} y mi correo es ${userEmail}`);
console.log("");

const header = `
<header>
    <h1>Hola, mundo</h1>
    <p>Mi nombre es ${userName} ${userLastName} y mi correo es ${userEmail}</p>
</header>
`;

document.write(header);

// B

/*let username= prompt("Ingresa tu nombre");
let age= parseInt(prompt("Ingresa tu edad en años"));
let color = prompt("Ingresa tu color favorito");

let address=prompt("Ingresa tu dirección");
let email=prompt("Ingresa tu email");
let phone=prompt("Ingresa tu número de teléfono");

const main = `
<main>
    <h2>Hola, amigo</h2>
    <p>Tu nombre es <strong>${username}</strong>, de edad ${age}, y tu color favorito es ${color}</p>
    <p>También sabemos que tu dirección es ${address}, tu email es ${email} y tu telefono es ${phone}</p>
</main>
`;

document.write(main);

console.log(`Tu nombre es ${username}, de edad ${age}, y tu color favorito es ${color}`);
console.log(`También sabemos que tu dirección es ${address}, tu email es ${email} y tu telefono es ${phone}`);
console.log("");
*/

// C

const mensaje = "Hoy tendremos un muy buen día, cuídate";
const despedida = "Hasta luego, Mundo";

// Convertir a mayus, minus y concatenar

console.info(despedida.toUpperCase());
console.info(mensaje.toLowerCase());
console.info(mensaje.concat(". ",despedida));
console.log("");

// Ver con que empieza, termina o que esta incluido

console.info(mensaje.startsWith("Hoy"));
console.info(mensaje.includes("un"));
console.info(mensaje.endsWith("buen"));
console.log("");

// Quitar espacios, adelante, atrás o las dos

console.info(mensaje.trimStart());
console.info(mensaje.trim());
console.info(mensaje.trimEnd());
console.log("");

// Reemplazador y repetidor de palabras

console.info(mensaje.replace("Hoy","Mañana"));
console.info(mensaje.replaceAll("un buen día","hambre"));
console.info(mensaje.replace(/[aeou]/g, "i"));
console.info(mensaje.repeat(5));
console.log("");

// Padding a inicio o final de una palabra

const nums="1234";

document.write(nums,". ");

console.info(nums.padStart(8,"#"));
console.log("");

// Extracción y división de fragmentos

console.info(mensaje.substring(14));
console.info(mensaje.substring(0,14));
console.info(mensaje.slice(14));
console.info(mensaje.slice(0,14));
console.info(mensaje.split(/[ ,]/));
console.table(mensaje.split(" "));
console.log("");

// Búsqueda del número index

console.info(mensaje.indexOf("m"));
console.info(mensaje.search("m"));

document.write(mensaje,". ",despedida);