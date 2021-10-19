import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { ListGif } from '../ListGif/ListGif'



export const GifGrid = ({categoria}) => {

  const {data, loading} = useFetchGifs(categoria)
  console.log(data)
  return (

    <>
    <h1 >{categoria}</h1>

      {
        loading ? 'cargando' :

        <div className="card-grid">
          {
          
            data.map(  img  => {
          
              return(

                <ListGif
                  key={img.id}
                  {...img} // mandas toda la data que ya tiene images la cual esta almacenada en img
                />
              )
            
            })
          }
        </div> 
      }
    
    </>
  )
}
