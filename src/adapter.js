// Robot adapter
// Converts commands from input files into robot actions

var robot = require('./robot.js');
var robotDir = robot.getDirEnum;
var commands;

var adapter = function() {
    function initalize(robot, dirEnum) {
        this.robot = robot;
        this.robotDir = dirEnum;
    }

    function setCommands(commands) {
        this.commands = commands;
    }

    function runCommands() {
        for(i = 0; i < commands.length; i++) {
            // check and run commands for robot
            switch(this.commands[i]) {
                case "PLACE":
                    // more code needed
                    break;
                case "MOVE":
                    robot.forward();
                    break;
                case "LEFT":
                    robot.rotateLeft();
                    break;
                case "RIGHT":
                    robot.rotateRight();
                    break;
                case "REPORT":
                    robot.report();
                    break;
            }
        }
    }

    return {
        initalize: initalize,
        setCommands: setCommands,
        runCommands: runCommands
    }
}();

module.exports = adapter;