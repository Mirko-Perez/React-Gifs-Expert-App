import React from "react";
import { useFechGifs } from "../hooks/useFechGifs";
import { GifGridItem } from "./GifGridItem";



export const GifGrid = ({ category }) => {

  
  const {data:images, loading}= useFechGifs( category );

  

  
  
  
  return (
    <>
      <h3 className='card animate__animated animate__zoomIn '>{category}</h3>
      {loading ?  <p className='card animate__animated animate__flash'>loading...</p>: <p>Ready</p>}
      <div className='card-grid'>
        
        {
          images.map((img)=>(
            <GifGridItem
              key={img.id}
              {...img}
            />
          ))
        }
      
      </div>
    </>
  );
};
