import { useEffect, useState } from 'react'
import { getGifs } from '../../helpers/GetGifs';

export const useFetchGifs = (categoria) => {

  const [state, setstate] = useState({

    data:[],
    loading: true
  });

  useEffect(() => {
    
    getGifs(categoria)
      .then(
        gifs => {
         
            setstate( {
                data: gifs,
                loading: false
              })
         
        }
      )

  }, [categoria])

  return state
}
