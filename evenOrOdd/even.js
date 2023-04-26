const total = 20
let count = 2

let num1 = 1;
let num2 = 1;

for(let i = 2; i <= total; i += 2) {
  console.log(num1 + `: counting: ` + i + '\n')
  num1++
}

while(count <= total) {
  console.log(num2 + `: counting: ` + count + '\n')
  count += 2;
  num2++
}

console.log(typeof process.argv[2])