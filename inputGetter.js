const fs = require('node:fs');

const inputGetter = () => {
    try {
        const data = fs.readFileSync('./input.txt', 'utf8');
        return data;
    } catch(err) {
        console.error(err);
        return null;
    }
};

module.exports = inputGetter;