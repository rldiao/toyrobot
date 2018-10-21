// controller.js acts as the Controller to set-up and run he simulation.
// Contains the adapter for converting parsed input into Robot actions.

// Set up simulation environment
var robot = require('./robot.js');
var parser = require('./parser.js');
var dirEnum = robot.getDirEnum();
var environment = require('./table.js');

// Placement flag 
var placeAppeared = false;

// Adapter
var adapter = function() {

    function runCommands(commands) {
        // adapter for syntax provided in PROBLEM.md

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
                    default:
                        console.log("ERROR: unrecognized direction " + placement[2])
                }
                
                robot.place(placement[0], placement[1], dir);
                continue;
            }
            // Check and run commands for robot
            if(this.placeAppeared){
                switch(commands[i]) {
                    case "MOVE":
                        // Do environment check here
                        moveRobot()
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
                    default:
                        console.log("ERROR: unrecognized command " + commands[i])
                }
            }
        }
    }

    function moveRobot() {
        // Performs boundary check for robot
        newPos = robot.forward(true);
        console.log(newPos);
        if(environment.checkBounds(newPos[0],newPos[1])) {
            robot.forward();
        }
        else {
            return;
        }
    }

    return {
        runCommands: runCommands
    }
}

// Simulation
parser.setFileDir('../inputs/inputd.txt');
var commands = parser.parseCommands();
var adapter = adapter();
adapter.runCommands(commands);
