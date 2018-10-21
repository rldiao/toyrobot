// Main test environment

var robot = require('./robot.js');
var parser = require('./parser.js');

parser.setFileDir('../inputs/inputa.txt');

var commands = parser.parseCommands()
console.log(commands)

robot.place(1,1,0);
robot.report();
robot.rotateRight();
robot.report();
robot.rotateLeft();
robot.report();

// const fs = require('fs');

// commands = fs.readFileSync('./commands.txt', 'utf8');
// commands = commands.split(/\r?\n/)

// console.log(commands);