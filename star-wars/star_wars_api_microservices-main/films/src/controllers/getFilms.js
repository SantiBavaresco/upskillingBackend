const Film = require('../data');
const {response} = require('../utils');

module.exports = async (req, res) => {
   const Films = await Film.list()
    response(res, 200, Films);
}