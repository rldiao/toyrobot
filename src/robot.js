'use strict'
// Yeah Robots
const constants = require('./constants')

class Robot {
    constructor(x, y, direction) {
        this.x = x;
        this.y = y;
        if(!(direction in constants.directionEnum)) {
            throw Error("Direction is not recognised.")
        }
        this.direction = constants.directionEnum[direction];
    }

    moveForward() {
        // Move forward one unit in facing direction
        /* Your Code */
    }

    turnLeft() {
        // Turn robot left
        /* Your Code */
    }

    turnRight() {
        // Turn robot right
        /* Your Code */
    }

    get position() {
        return {
            x: this.x,
            y: this.y,
            direction: this.direction
        }
    }
}

module.exports = Robot;