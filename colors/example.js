var colors = require('colors');

console.log('Bold and Red Text'.red.bold);
console.log(('Rainbow Colors').rainbow);
console.log('Random Everything'.random);
console.log('Green Bold Underline'.green.bold.underline);

colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});

console.log("Info".input);
console.log("Warning".warn);
console.log("Error".error);
