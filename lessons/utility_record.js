"use strict";
let heros = {
    Batman: { name: "Batman", power: 60, marvel: false, dcComics: true },
    Spiderman: { name: "Spiderman", power: 60, marvel: true, dcComics: false },
    Superman: { name: "Superman", power: 60, marvel: false, dcComics: true },
};
console.log(heros);
heros.Superman.dcComics && console.log(`${heros.Superman.name} comes from dcComics.`);
