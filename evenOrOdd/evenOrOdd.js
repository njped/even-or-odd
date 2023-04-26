const total = 20
let count = Number(process.argv[2])

let num1 = 1;
let num2 = 1;

let userInput = process.stdin
userInput.setEncoding('utf-8')
console.log("Tell me even or odd")
userInput.on('data', function (userInput) {
  if (userInput === 'odd')
  {
    for(let i = 1; i <= total; i += 2) {
      console.log(`You said: ${userInput}`)
      console.log(num1 + `: counting: ` + i + '\n')
      num1++
    }
  }
  else if (userInput === 'even') {
    for(let i = 1; i <= total; i += 2) {
      console.log(`You said: ${userInput}`)
      console.log(num1 + `: counting: ` + i + '\n')
      num1++
    }
  }
  else if (userInput === 'bye'){
    console.log(`You said: ${userInput}`)
    onsole.log('Bye. Thanks for sharing. [program signing out]')
    process.exit()
  }
  else {
    console.log(`You said: ${userInput}`)
    console.log('please write: even or odd to continue')
    console.log('type bye to exit the program')
  }
})



// while(count <= total) {
//   console.log(num2 + `: counting: ` + count + '\n')
//   count += 2;
//   num2++
// }
