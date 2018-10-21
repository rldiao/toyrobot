// Acts as Robot Controller and Adapter

// Set up
var robot = require('./robot.js');
var parser = require('./parser.js');
var adapter = require('./adapter.js')
var environment = require('./table.js');
parser.setFileDir('../inputs/inputa.txt');

// Placement flag 
var placeAppeared = false;

// Simulation
var commands = parser.parseCommands();

var adapter = function() {
    function runCommands(commands) {
        // runs commands and adapters for robot.

        for(i = 0; i < commands.length; i++) {
            // Check for PLACE
            if(commands[i].startsWith("PLACE")){
                this.placeAppeared = true;
                var placement = commands[i].split(' ')[1].split(',');
                // console.log(commands[i].split(' ')[1].split(','))
                robot.place(placement[0], placement[1], 0);

            }
            // check and run commands for robot
            if(this.placeAppeared){
                switch(commands[i]) {
                    case "MOVE":
                        // checks within bounds
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
    }
    return {
        runCommands: runCommands
    }
}

var adapter = adapter();
adapter.runCommands(commands);