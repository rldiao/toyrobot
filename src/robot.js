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

    function forward() {
        switch(this.dir) {
            case DirEnum.NORTH:
                this.yCoord++;
                break;
            case DirEnum.SOUTH:
                this.yCoord--;
                break;
            case DirEnum.EAST:
                this.xCoord++;
                break;
            case DirEnum.WEST:
                this.xCoord--;
                break;
        }
    }

    function rotateLeft() {
        this.dir = (this.dir - 1) % enumLookup.length;
    }

    function rotateRight() {
        this.dir = (this.dir + 1) % enumLookup.length;
    }

    function report() {
        console.log(this.xCoord + ',' + this.yCoord + ',' + enumLookup[this.dir])
    }

    return {
        place: place,
        forward: forward,
        rotateLeft: rotateLeft,
        rotateRight: rotateRight,
        report: report
    }
}();

module.exports = robotFunctions;