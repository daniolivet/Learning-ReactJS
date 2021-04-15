
/* const getImagenPromesa = () => new Promise ( resolve => resolve('https://ajajajajaja.com') )

getImagenPromesa().then(console.log); */

// For use await, always must be inside of async

const getImagen = async() => {

    try {
        const apiKey = 'w9EL3KGGvs40bA7FXlPbGE9IVS4oLNrP';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json();
        const { url } = await data.images.original;
    
        const img = document.createElement('img');
        img.src = url;
    
        document.body.append(img); 
    } catch (error) {
        // ERROR
        console.log(error)
    }

}

getImagen();