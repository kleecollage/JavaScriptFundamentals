import { getHeroeById } from "./bases/08-imp-exp";

// const promesa = new Promise((resolve, reject) => {
// 	const heroe = getHeroeById;
// 	console.log(heroe(2));

// 	setTimeout(() => {
// 		console.log("2 s después");
// 		resolve(heroe(100)); // llamamos al metodo then
// 		reject("No existe este ID");
// 	}, 2000);
// });

// promesa
// 	.then((heroeParam) => {
// 		console.log("heroe", heroeParam);
// 	})
// 	.catch((err) => console.warn(err));

const getHeroreByIdAsync = (id) => {
  const heroeData = getHeroeById(id);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("2 s después");
      if (heroeData) {
        resolve(heroeData); // llamamos al metodo then
      } else {
        reject('No existe ningun heroe con este ID') // llamamos al metodo catch
      }
    }, 2000);
  });
};

getHeroreByIdAsync(4)
  // .then((heroe) => console.log("Heroe", heroe))
  // .catch((err) => console.warn(err))
  .then(console.log) // mandamos el primer argumento al clog
  .catch(console.warn); // recibe el mismo mensaje que con el catch anterior