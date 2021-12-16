import React, { useState } from 'react'
import { AddCategory } from './component/AddCategory';
import { GifGrid } from './component/GifGrid';

export const GifsExpertApp = () => {

  
  const [categories, setCategories] = useState(['One Punch']);

  // const handleAdd= () =>{

  //   setCategories([...categories,'Matriz'])

  // }
  
    return (
        <>
          <h2>Gifs Expert App</h2>
          <AddCategory setCategories={ setCategories } />
          <hr />


          <ol>
            {
              categories.map( (category) =>
                <GifGrid 
                  key={category} 
                  category={category}
                />
              )
            }
            
          </ol>  
        </>
    )
}

