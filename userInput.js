let userInput = process.stdin
userInput.setEncoding('utf-8')
console.log('Hello, I am listening. Tell me more')
userInput.on('data', function(data) {
  if(data === 'exit\n') {
    console.log('Bye. Thanks for sharing. [program signing out]')
    process.exit()
  }
  else {
    console.log(`\nYou said: ${data}` )
    console.log('oh, tell me more')
  }
});