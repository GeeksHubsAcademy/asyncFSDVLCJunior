
// let funcionAsincrona = (nombre) => new Promise ((resolve, reject) => {
//     if(nombre == "David"){
//         resolve (console.log("El nombre empieza por D"));
//     } else {
//         reject (console.log("Mal el nombre no es David"));
//     }
// });

// funcionAsincrona("David")
//     .then(console.log)
//     .catch(console.error)

// let promesaMundo = new Promise(function(resolve, reject)  {
//     resolve ("Hola");
// })


// promesaMundo
//     .then(llamaEstaVariableComoQuieras => `${llamaEstaVariableComoQuieras} Mundo`)
//     .then(llamaEstaVariableComoQuieras => `${llamaEstaVariableComoQuieras}!`)
//     .then(llamaEstaVariableComoQuieras => console.log(llamaEstaVariableComoQuieras));


// let getFilm = () => new Promise((res, rej) => {
//     res('Matrix');
// });

// let getMain = film => new Promise((res, rej) => {
//     film === 'Matrix' ? res('Neo') : rej('404');
// });
 
// // getFilm()
// //     .then(gatubela => getMain(gatubela)).then( main => console.log(main))

// getFilm()
//     .then( getMain )
//     .then( console.log )



// let getFilm = () => new Promise((res, rej) => {
//     res('Matrix');
// });

// let getMain = film => new Promise((res, rej) => {
//     film === 'Matrix' ? res('Neo') : rej('404');
// });

// async function queue() {
//     let film = await getFilm(); //Supongamos que toca 'Matrix'
//     let main = await getMain(film); //Neo
//     console.log(main);
// }

// queue(); //escribirá 'Neo' en la consola.


let ponteCalcetines = () => new Promise((res, rej) => {
    res('Calcetines puestos');
})

let ponteZapatillas = ropa => new Promise((res, rej) => {
    ropa === 'Calcetines puestos' ? res('Estas calzado') : rej('404');
})

const vestirse = async () => {
    let primerPaso = await ponteCalcetines();
    let segundoPaso = await ponteZapatillas(primerPaso);

    console.log(segundoPaso);
}

vestirse();