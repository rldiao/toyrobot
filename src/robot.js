// robot.js represents the simulated robot

// Direction Handling
var DirEnum = {"NORTH":0, "EAST":1, "SOUTH":2, "WEST":3};
var enumLookup = ['NORTH', 'EAST', 'SOUTH', 'WEST'];

// Robot Properties
var xCoord;
var yCoord;
var dir;
var environment = require('./table.js');

// Robot Commands
var robotFunctions = function() {

    // TODO: Prevent placement more than once
    function place(xCoord ,yCoord ,dir) {
        this.xCoord = xCoord;
        this.yCoord = yCoord;
        this.dir = dir;
        this.environment = environment;
    }

    function forward() {
        switch(this.dir) {
            case DirEnum.NORTH:
                if (environment.checkBounds(this.xCoord, this.yCoord + 1)) {
                    this.yCoord++;
                }
                break;
            case DirEnum.SOUTH:
                if (environment.checkBounds(this.xCoord, this.yCoord - 1)) {
                    this.yCoord--;
                }
                break;
            case DirEnum.EAST:
                if (environment.checkBounds(this.xCoord + 1, this.yCoord)) {
                    this.xCoord++;
                }
                break;
            case DirEnum.WEST:
                if (environment.checkBounds(this.xCoord - 1, this.yCoord)) {
                    this.xCoord--;
                }
                break;
        }
    }

    function rotateLeft() {
        // Rotates 1 step left
        if(this.dir == 0) {
            this.dir = enumLookup.length - 1
        }
        else {
            this.dir = (this.dir - 1) % enumLookup.length;
        }
    }

    function rotateRight() {
        // Rotates 1 step right
        this.dir = (this.dir + 1) % enumLookup.length;
    }

    function report() {
        console.log(this.xCoord + ',' + this.yCoord + ',' + enumLookup[this.dir]);
    }

    function getDirEnum() {
        return DirEnum;
    }

    function getDirEnumLookup() {
        return enumLookup;
    }
    
    function getCoords() {
        return (x, y);
    }

    return {
        place: place,
        forward: forward,
        rotateLeft: rotateLeft,
        rotateRight: rotateRight,
        report: report,
        getDirEnum: getDirEnum,
        getDirEnumLookup: getDirEnumLookup,
        getCoords: getCoords
    }
}();

module.exports = robotFunctions;