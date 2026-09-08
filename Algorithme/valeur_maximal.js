let arr = [100, 40, 22, 200, 7000, 99999];
let max = arr[0];

for (let i = 0; i <= arr.length; i++) {
    if (max < arr[i]) {
        max = arr[i];
    }
}
console.log(max);