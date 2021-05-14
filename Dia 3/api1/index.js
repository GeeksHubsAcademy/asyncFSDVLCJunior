const axios = require('axios');

//CONSUMO DE DATOS DE UNA API....
//https://rickandmortyapi.com/api/character/2



const traePersonaje = async () => {

    let res = await axios.get('https://rickandmortyapi.com/api/character');

    console.log(res.data);
}


traePersonaje();

