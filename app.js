const chalk=require('chalk');
const getNotes=require('./notes');

const mynotes=getNotes();

console.log(mynotes);
console.log(chalk.bold.inverse.green('Succes!'));