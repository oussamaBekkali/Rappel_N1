let nombres = [4, 7, 2, 7, 9, 4, 5, 7];

let repetitions = [];

for (let i = 0; i < nombres.length; i++) {
  if (nombres.indexOf(nombres[i]) !== nombres.lastIndexOf(nombres[i])) {
    if (!repetitions.includes(nombres[i])) {
      repetitions.push(nombres[i]);
    }
  }
}

console.log(repetitions);
