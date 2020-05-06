const connection = require('../database/connections');
const parameters = require('../util/parameters');

module.exports = {
    async getLog(request, response) {
        parameters.columnsString();
        return response.json(await connection('log').select('*').orderBy('id', 'desc'));
    },

    async getCount(request, response) {
        const { parameter = '' } = request.query;
        const acepted = await parameters.columnsString();

        if (acepted.indexOf(parameter, 0) == -1)
            return response.status(404).json({ error: 'parameter invalid' });

        try {
            if (parameter == '')
                return response.json(await connection('log').count());
            else
                return response.json(await connection('log').select({'parameter': parameter}).count().groupBy(parameter).orderBy('count', 'desc'));
        }
        catch (err) {
            return response.status(404).json({ error: 'parameter invalid' });
        };
    },

    async getQuartil(request, response) {
        const { parameter } = request.query;
        const acepted = await parameters.columnsInteger();

        if (parameter == '' || acepted.indexOf(parameter, 0) == -1)
            return response.status(400).json({ error: 'parameter is null' });

        try {
            return response.json(await connection('log')
                .select({
                    'Quartil1': connection('log').whereBetween(parameter, [0, 25]).count(),
                    'Quartil2': connection('log').whereBetween(parameter, [26, 50]).count(),
                    'Quartil3': connection('log').whereBetween(parameter, [51, 75]).count(),
                    'Quartil4': connection('log').whereBetween(parameter, [76, 100]).count()
                }).distinct());
        }
        catch (err) {
            return response.status(404).json({ error: 'parameter invalid' });
        }
    }
}