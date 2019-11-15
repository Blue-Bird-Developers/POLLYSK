const pool = require('../module/poolAsync');

module.exports = {
    read: ({userId}) => {
        const table = 'users';
        const query = `SELECT * FROM ${table} WHERE userId = ${userId}`;
        return pool.queryParam_None(query)
        .then(result => {
            const face = result[0];
            if(!face){
                throw new Error('No Face');
            }
            return face;
        })
        .catch(err => {
            console.log(err);
            throw err;
        })
    },
};