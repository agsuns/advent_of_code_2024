const inputGetter = require('../inputGetter');

const data = inputGetter().split(/\r\n/);
const processedData = data.map(line => {
    return line.split(/\s+/).map(Number);
})

const firstColumn = processedData.map(line => line[0]).toSorted();
const secondColumn = processedData.map(line => line[1]).toSorted();

const getDistance = (a, b) => Math.abs(a - b);

const totalDistance = firstColumn.reduce((acc, current, index) => {
    return acc += getDistance(current, secondColumn[index]);
}, 0);

console.log('total distance: ', totalDistance);