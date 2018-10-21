// Class representing the table or more generally the simulated environment

// range of x
const width = 5;
// range of y
const length = 5;

function checkBounds(x, y) {
    if (x < 0 || x > width - 1) {
        return false
    }
    else if (y < 0 || y > length - 1) {
        return false
    }
    else {
        return true
    }
}

module.exports.checkBounds = checkBounds;
