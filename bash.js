const pwd = require('./pwd.js');
const ls = require('./ls.js');
const cat = require('./cat.js');
const curl = require('./curl.js');
const head = require('./head.js');
const tail = require('./tail.js');

const done = (output) => {
  process.stdout.write(output);
  process.stdout.write('\nprompt > ');
};
const date = () => {
  const now = Date();
  done(now);
};
const echo = (cmd) => {
  cmd.shift();
  cmd = cmd.join(' ');
  done(cmd);
};

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim().split(' ');
  switch (cmd[0]) {
    case 'pwd':
      return pwd(done);
    case 'ls':
      return ls(done);
    case 'cat':
      return cat(cmd[1], done);
    case 'curl':
      return curl(cmd[1], done);
    case 'date':
      return date();
    case 'echo':
      return echo(cmd);
    case 'head':
      return head(cmd[1], done);
    case 'tail':
      return tail(cmd[1], done);
    default:
      done('something went wrong');
  }
});

// date +
// echo +
// head +
// tail +
// sort
// wc
// uniq
// find
