//example of how async functions 're-enter' the JS thread once the stack is clear

const startTime = new Date();

setTimeout(() => {
  const endTime = new Date();
  console.log('Time elapsed: ', endTime - startTime, 'ms');
}, 500);

while (new Date() - startTime < 1000) {}
