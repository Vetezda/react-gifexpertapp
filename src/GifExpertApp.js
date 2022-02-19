import { useState } from "react";
import AddCategory from "./components/AddCategory";
import {GifGrid} from "./components/GifGrid";


const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch']);

    /*const handleAdd = () => {
        setCategories([...categories, 'Naruto']);
        setCategories( cats => [...cats, 'Naruto']); tambien funciona con este callbacks, 
    }*/

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/> 
            <hr />

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={ category }//key: simula el id de los elementos del arreglo  
                            category={ category }
                        />
                    ))     
                }
            </ol>

        </>
    );
}

export default GifExpertApp;




