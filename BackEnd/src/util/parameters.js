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
            'cloudiness_percent'
        ];

        return columns;
    }
}