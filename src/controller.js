// controller.js acts as Robot Controller and Adapter

// Set up simulation environment
var robot = require('./robot.js');
var parser = require('./parser.js');
var dirEnum = robot.getDirEnum();

// Placement flag 
var placeAppeared = false;

// Adapter
var adapter = function() {
    function runCommands(commands) {
        // runs commands and adapters for robot.

        for(i = 0; i < commands.length; i++) {
            // Check for PLACE
            if(commands[i].startsWith("PLACE")){
                this.placeAppeared = true;
                var placement = commands[i].split(' ')[1].split(',');
                var dir;

                switch(placement[2]) {
                    case 'NORTH':
                        dir = dirEnum.NORTH;
                        break;
                    case 'EAST':
                        dir = dirEnum.EAST;
                        break;
                    case 'SOUTH':
                        dir = dirEnum.SOUTH;
                        break;
                    case 'WEST':
                        dir = dirEnum.WEST;
                        break;
                }

                robot.place(placement[0], placement[1], dir);

            }
            // check and run commands for robot
            if(this.placeAppeared){
                switch(commands[i]) {
                    case "MOVE":
                        // TODO: checks within bounds
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

// Simulation
parser.setFileDir('../inputs/inputc.txt');
var commands = parser.parseCommands();
var adapter = adapter();
adapter.runCommands(commands);
