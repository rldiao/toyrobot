'use strict'
const directionEnum = { NORTH: 0, EAST: 1, SOUTH: 2, WEST: 3 };
Object.freeze(directionEnum);

const commandEnum = { PLACE: 0, MOVE: 1, LEFT: 2, RIGHT: 3, REPORT: 4 };
Object.freeze(commandEnum);

const tableDimensions = {
    width: 5,
    length: 5
}
Object.freeze(tableDimensions)

module.exports = {
    directionEnum,
    commandEnum,
    tableDimensions
}