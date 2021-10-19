import React, { useState } from 'react';
import { AddCategorie } from './components/addCategorie/AddCategorie';
import { GifGrid } from './components/GifGrid/GifGrid.jsx';


export const App = () => {

  const [categories, setcategories] = useState(['Perro']);


  return (
    <div>
      <h1 >Gifs</h1>
      <AddCategorie
        setcategories={setcategories}

      />
      <hr />
      <ul>
        {
          categories.map((categoria) => {
            return (

              <GifGrid
                key={categoria}
                categoria={categoria}
              />
            )
          }

          )
        }
      </ul>

    </div>
  );
}

