const db = require('../../../db/sequelize');
const company = require('./company.js')(db);

module.exports = {
    company
};