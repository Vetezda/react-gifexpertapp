import {useEffect, useState} from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {//no se le pone async ya que por defecto espera una promesa

        getGifs( category )
            .then( imgs => {

                setTimeout( () => {

                    setState({
                        data: imgs,
                        loading: false
                    })
                    
                }, 1000);
            });

    }, [category])//Ahora el useEffect se va a ajecutar unicamente cuando el category cambie 

    return state;

}




