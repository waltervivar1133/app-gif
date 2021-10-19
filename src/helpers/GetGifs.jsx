import {api, token} from '../api/api';

export const getGifs = async(categoria) => {

  const url = `${api}${encodeURI(categoria)}&limit=10&api_key=${token}`;

  const resp = await fetch(url);

    // analizando el api vemos que data lo podemos desestructurar

  const {data} = await resp.json();

  console.log(data)
  // recorrer el arreglo
  const gifs = data.map( img => {
    return {
        id : img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
    }});

  return gifs
}