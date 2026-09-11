let nbs = [2, 8, 10, 33, 9, 99];

for (let a = 0; a < nbs.length; a++) {
  for (let b = 0; b < nbs.length; b++) {
    if (nbs[b] > nbs[b + 1]) {
      let temp = nbs[b];
      nbs[b] = nbs[b + 1];
      nbs[b + 1] = temp;
    }
  }
}

console.log(nbs);
