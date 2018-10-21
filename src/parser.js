// Parser for robot commands
// TODO: Better error handling

const fs = require('fs');

var parserFunctions = function() {
    function parseCommands(fileDir) {
        var commands = fs.readFileSync(fileDir, 'utf8');
        commands = commands.split(/\r?\n/)

        return commands
    }

    function setFileDir(fileDir) {
        this.fileDir = fileDir;
    }

    return {
        parseCommands: parseCommands,
        setFileDir: setFileDir
    }
}();

module.exports = parserFunctions;