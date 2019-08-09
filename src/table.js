'use strict'
// A table... You probably don't need to code here

class Table {
    constructor(length, width, robot) {
        this.length = length;
        this.width = width;
    }

    setRobot(robot) {
        this.robot = robot;
    }

    displayRobot() {
        if(!this.robot) {
            throw Error("Where's the robot???");
        }
        return JSON.stringify(this.robot.position, null, 2);
    }

    robotOnTable() {
        // Checks if the robot is on the table
        // Returns: bool
        if(!this.robot) {
            throw Error("Where's the robot???");
        }

        let onTable = true;
        const position = this.robot.position;

        if (position.x < 0 || position.x > this.width - 1) {
            onTable = false;
        }
        if (position.y < 0 || position.y > this.length - 1) {
            onTable = false;
        }

        return onTable;
    }
}

module.exports = Table;