const connection = require('../database/connections');

module.exports = {
    async columnsString() {
        const columns = [
            'city',
            'country',
            'weather',
            'categoryMusic'
        ];

        return columns;
    },

    async columnsInteger() {
        const columns = [
            'humidity',
            'cloudinessPercent'
        ];

        return columns;
    }
}