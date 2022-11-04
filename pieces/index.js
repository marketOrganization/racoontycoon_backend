const buildings = require('./building')
const commodies = require('./commodies')
const railroads = require('./railroads')
const towns = require('./towns')

module.exports = {
    buildings : buildings,
    commodies : commodies.stocks,
    railroads : railroads,
    towns : towns
}