//callbacks.

// const cb = () => {
//     console.log("Hola mundo");
// }

// setTimeout(cb,5000);


// const operacionAsincrona = (funcion) => {
//     funcion();
// }

// const callback = () => {
//     let a = "Adrián";
//     let b = "Alejandro";
//     let c = "Adriana";

//     return console.log(a,b,c,"...vaya, todos los nombres empiezan por A en esta clase");
// }

// operacionAsincrona(callback);

// const ejemploCallback = (pepito) => {
//     pepito();
// };

// const manuel = () => {
//     console.log("holaaaaaa");
// }

// const luis = () => {
//     console.log("adios");
// }

// ejemploCallback(manuel);


// const empiezaElLio = () => {

//     setTimeout(() => {

//         console.log("pre ovejas");

//         setTimeout(()=> {
//             console.log("AIAIAIAIAIAI")

//             setTimeout(() => {
//                 console.log("Bienvenido a la nave del misterio");
//             },1000);

//             console.log("Wayco");

//         }, 5000);

//         //Post setTimeout

//         for (let i = 0; i < 50; i++){
//             console.log("Hay " + i + " ovejas en la granja");
//         }

//     }, 3000);

//     console.log("lalalalalalalal");

// };


// empiezaElLio();


const masLio = () => {


    setTimeout(()=>{
        console.log("Coche transparente");
    },3000);


    setTimeout(()=>{
        console.log("Coche azul");
    },7000);


    setTimeout(()=>{
        console.log("Coche verde");
    },2000);


    setTimeout(()=>{
        console.log("Coche rojo");
    },500);


}


masLio();