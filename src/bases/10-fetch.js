const apiKey = 'UQQmYe2ARypkNt8WEMxX0d2fHqZs8Wt4';
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then(resp => resp.json())
    .then(({ data }) => {
        const url = data.images.original.url;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img)
    })
    .catch(console.warn);