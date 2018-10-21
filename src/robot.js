// robot.js represents the simulated robot

// Direction Handling
var DirEnum = {"NORTH":0, "EAST":1, "SOUTH":2, "WEST":3};
var enumLookup = ['NORTH', 'EAST', 'SOUTH', 'WEST'];

// Robot Properties
var xCoord;
var yCoord;
var dir;

// Robot Commands
var robotFunctions = function() {

    function place(xCoord ,yCoord ,dir) {
        this.xCoord = xCoord;
        this.yCoord = yCoord;
        this.dir = dir;
    }

    function forward(check) {
        check = check || false;

        var newY = this.yCoord;
        var newX = this.xCoord;

        switch(this.dir) {
            case DirEnum.NORTH:
                newY++;
                break;
            case DirEnum.SOUTH:
                newY--;
                break;
            case DirEnum.EAST:
                newX++;
                break;
            case DirEnum.WEST:
                newX--;
                break;
        }

        if (!check) {
            this.yCoord = newY;
            this.xCoord = newX;
        }
        else {
            return [newX,newY];
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