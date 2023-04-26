const total = 20
// let count = Number(process.argv[2])

let num1 = 1;
// let num2 = 1;

process.stdin.setEncoding('utf-8')
console.log("Tell me even or odd")
process.stdin.on('readable', function () {
  let userInput;
  while((userInput = process.stdin.read()) !== null) {
    if (userInput === 'odd\n')
    {
      for(let i = 1; i <= total; i += 2) {
        console.log(`You said: ${userInput}`)
        console.log(num1 + `: counting: ` + i)
        num1++
      }
    }
    else if (userInput === 'even\n') {
      for(let i = 1; i <= total; i += 2) {
        console.log(`You said: ${userInput}`)
        console.log(num1 + `: counting: ` + i)
        num1++
      }
    }
    else if (userInput === 'bye\n'){
      console.log(`You said: ${userInput}`)
      console.log('Bye. Thanks for sharing. [program signing out]')
      process.exit()
    }
    else {
      console.log(`You said: ${userInput}`)
      console.log('please write: even or odd to continue')
      console.log('type bye to exit the program')
    }
  }
})



// while(count <= total) {
//   console.log(num2 + `: counting: ` + count + '\n')
//   count += 2;
//   num2++
// }
