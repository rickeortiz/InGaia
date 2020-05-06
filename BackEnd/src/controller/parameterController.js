const parameters = require('../util/parameters');

module.exports = {
    async getParametersString(request, response) { 
        return response.json(await parameters.columnsString());
    },
    async getParametersInteger(request, response) { 
        return response.json(await parameters.columnsInteger());
    }
}