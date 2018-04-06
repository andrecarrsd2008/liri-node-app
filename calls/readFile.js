const fs = require('fs');

const readFile = (query) => {
        const path = "data/random.txt";
        const encode = "utf8";

        const readFile = () => {
            return fs.readFile(path, encode, (err, data) => {
                if (err) throw err[command, query] = data.split(",");
                logic.executeCommand(command, query);
            })
        }

        module.exports = readFile