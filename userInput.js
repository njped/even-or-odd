// process.stdin.setEncoding('utf-8')
// console.log('Hello, I am listening. Tell me more')
// process.stdin.on('data', function(data) {
//   if(data === 'exit\n') {
//     console.log(`You said: ${data}`)
//     console.log('Bye. Thanks for sharing. [program signing out]')
//     process.exit()
//   }
//   else {
//     console.log(`\nYou said: ${data}` )
//     console.log('oh, tell me more')
//   }
// });


process.stdin.setEncoding('utf8');
// - - Sample code - - 
process.stdin.on('readable', () => {
    let userInput;
    // Use a loop to make sure we read all available data.
    while ((userInput = process.stdin.read()) !== null) {
        if(userInput === 'hello\n') 
            process.stdout.write(`You entered ${userInput}`);
        console.log('tell me more');
        // branch off using conditional statements based on the value of userInput
    }
  });
  
// 'control + d' will trigger the 'end' event 
process.stdin.on('end', () => { 
    process.stdout.write('Bye. The end.\n');
});