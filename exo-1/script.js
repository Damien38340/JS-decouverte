// you can write js here
let kelvins = prompt("Quelle est la température aujourd'hui en Kelvins ?");
const celsius = kelvins - 273; //je soustrait la variable kelvins de 273 pour convertir en celsius
let fahrenheits = celsius * (9/5) + 32 //J'utilise l'opération de conversion pour obtenir le résultat en fahrenheits
fahrenheits = Math.floor(fahrenheits); //obtenir un entier



console.log("Celsius:" + celsius);
console.log("Fahrenheit:" + fahrenheits);