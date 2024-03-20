/*const nombre = "Pedrito";

nombre = "Jhon"
console.log(nombre);*/

//Funcion declarativa
function contraValida(input) {
    return input == "2F" || input == '3F'
}
//console.log("contraValida",contraValida("2F"));

//Funcion anonima
let contraValida2 = function (input) {
    return input == "2F" || input == '3F'
}
//console.log("contraValida2",contraValida2("2F"));

//funcion flecha - arrow function
let contra = (input)=>{
    return input == "2F" || input == '3F'
}
//console.log("contra", contra("FF"));

let validarMujeres = (mujer)=>{
    const mujeres = ['Danna', 'Darly', 'Salome'];
    return mujeres.find(muj => muj.toLowerCase() == mujer.toLowerCase());
}

//console.log(validarMujeres("danna"));

let splitFun = (nombres)=>{
    const nombre = nombres.split("-")[0];
    const apellidos = nombres.split("-")[1];
    const edad = nombres.split("-")[2];
    console.log(
        `Mi nombres es: ${nombre} ${apellidos} y tengo ${edad}`
    )
}

//splitFun("amilkar-hernandez-23")

const array = [{
    name: 'Danna',
    lastname: 'florez',
    age: 23
},
{
    name: 'Daniel',
    lastname: 'rubio',
    age: 19
}];

const json = {
    objetos: [{
        name: 'Danna',
        lastname: 'florez',
        age: 23
    },
    {
        name: 'Daniel',
        lastname: 'rubio',
        age: 19
    }]
}

let funcionObjeto = (arrayObjetos)=>{
    //arrayObjetos.forEach((obj)=>console.log(obj.name))
    arrayObjetos.map((obj)=>{
        obj.name == 'Danna' ? obj.name = 'Farid' : null;
        console.log(`Nombres: ${obj.name}`)})
}

funcionObjeto(array)
