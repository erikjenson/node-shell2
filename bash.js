const pwd = require('./pwd.js');
const ls = require('./ls.js');
const cat = require('./cat.js');

process.stdout.write('prompt > ');

process.stdin.on('data', data => {
  const cmd = data.toString().trim().split(' ');
  switch(cmd[0]) {
    case 'pwd':
      pwd();
      break;
    case 'ls':
      ls();
      break;
    case 'cat':
      cat(cmd[1]);
      break;
  }
});
