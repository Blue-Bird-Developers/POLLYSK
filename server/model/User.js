const pool = require('../module/poolAsync');
const util = require('../../server/module/util');
const code = require('../../server/module/statusCode');
const msg = require('../../server/module/responseMessage');
module.exports = {

    // getUser: () => {
    //     const table = 'users';
    //     const query = `SELECT MAX(userId) FROM ${table}`;
    //     return pool.queryParam_None(query)
    //         .then(result => {
    //             return {
    //                 code: code.OK,
    //                 json: util.successTrue(msg.ID_READ_SUCCESS, {
    //                     userId: userId
    //                 })
    //             }
    //         })
    //         .catch(err => {
    //             console.log(err);
    //             throw err;
    //         })
    // },

    read: ({
        userId
    }) => {
        const table = 'users';
        const query = `SELECT * FROM ${table} WHERE userId = ${userId}`;
        return pool.queryParam_None(query)
            .then(result => {
                const face = result[0];
                if (!face) {
                    throw new Error('No Face');
                }
                return face;
            })
            .catch(err => {
                console.log(err);
                throw err;
            })
    },
    update: ({
        userId,
        age
    }) => {
        const table = 'users';
        return pool.queryParam_None(`UPDATE ${table} SET age = ${age} WHERE userId = ${userId}`)
            .then(result => {
                return {
                    code: code.OK,
                    json: util.successTrue(msg.AGE_UPDATE_SUCCESS, {
                        userId: userId,
                        age: age
                    })
                }
            })
            .catch(err => {
                console.log(err);
                throw err;
            })
    },
    insert: ({
        face,
        age
    }) => {
        const table = 'users';
        const fields = 'face, age';
        const questions = `?, ?`;
        const values = [face, age];
        return pool.queryParam_Parse(`INSERT INTO ${table}(${fields}) VALUES(${questions})`, values)
        .then(res => {
            return {
                code: code.OK,
                json: util.successTrue(msg.AGE_UPDATE_SUCCESS, {
                    userId: res.insertId
                })
            }
        }).catch(err => {
            console.log(err);
            throw err;
        })
    }
}