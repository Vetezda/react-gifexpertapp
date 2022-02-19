

export const getGifs = async( category ) => {
                                                        //encodeURI remplaza los espacios que pueda tener el valor con simbolos para se acople al url
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=oY1BX43tYiJbZbnuA7Sa0CqGA3cm8Ejk`;
    const  resp = await fetch( url );
    const { data } = await resp.json();
    
    const gifs = data.map( img => {
    return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
        }
    })

    return gifs;

}