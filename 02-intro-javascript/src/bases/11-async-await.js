

// const getImagenPromesa = () => new Promise( resolve => resolve('https://plutarco.com') )
// getImagenPromesa().then( console.log );


const getImagen = async() => {
    

    try {
        const apiKey = 'K1tIPFP32OOjJazHiyiXhfHl8ovOCxYP';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        console.log(error);
    }


}

getImagen();






// const apiKey = 'K1tIPFP32OOjJazHiyiXhfHl8ovOCxYP';

// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticion
//     .then((resp) => resp.json())
//     .then( ({ data }) => {
//         const { url } = data.images.original;
//         const img = document.createElement('img');
//         img.src = url;
//         document.body.append(img)
//     })
//     .catch( console.warn )