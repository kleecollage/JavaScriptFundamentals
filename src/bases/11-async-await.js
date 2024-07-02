const getImagenPromesa = () => new Promise((resolve) => {
    resolve('http://google.com')
});

getImagenPromesa()
    .then(console.log);

// optimizamos el codigo anterior usando asyn
// agregar async a una funcion lo convierte en una promesa
const getImage = async () => {
    try {
        const apiKey = "UQQmYe2ARypkNt8WEMxX0d2fHqZs8Wt4";
        const resp = await fetch(
            `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
        );
        const { data } = await resp.json();
        const { url } = data.images.original;
        const img = document.createElement("img");
        img.src = url;
        document.body.append(img);
    } catch (error) {
        console.error("Error obteniendo .gif", error)
    }

}

getImage()