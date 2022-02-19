//import { useState, useEffect } from "react";
//import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";

import { useFetchGifs } from "../hooks/useFetchGifs"



export const GifGrid = ({ category }) => {

    //const [images, setImages] = useState([]);

          //recordemos que podemos renombrar una variable :images
    const { data:images, loading} = useFetchGifs( category );
    console.log(loading);

    
    /*useEffect(() => {//con useffect hacemos que una funcion, codigo, intruccion ,etc se ejecute solo cuando el compenente es renderizado por primera vez 
       getGifs( category )
       .then( setImages );
    }, [])//este segundo argumento es un arreglo de dependencias, si esta vacío indica el useffect se va a disparar solo una unica vez*/

   
  return (
    <>
        <h3 className="animate__animated animate__fadeIn"> { category }</h3>
        
        {//si loading = true, entonces se muestra <p>Loading...</p> 
        loading && <p className="animate__animated animate__flash">Loading...</p>}

        <div className="card-grid">
                {
                  images.map( img  => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img }//de esta manera mandamos las propiedades de img de una vez
                        />
                    ))
                }

                {/*images.map( ({ id, title }) => (
                        <li key={ id }> { title } </li>                   
                        )
                    )*/
                }
                    
        </div>
    </>  
  )
}
