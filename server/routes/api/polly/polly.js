const express = require('express')
const router = express.Router()
module.exports = router

const AWS = require('aws-sdk');
AWS.config.loadFromPath(__dirname + '/pollyConfig.json');

router.get('/:pollyName', (req, res) => {
    console.log(req.query);
    const s3 = new AWS.S3();
    const params = {
        Bucket: "pollybucket223",
        Key: `${pollyName}.mp3`,
    };
    s3.getSignedUrl('getObject', getParams, function(err, url) {
        if(err) { throw {msg:err, code:"AWS_ERROR"}; }
        else {
            return url;
        }
    });
})

// //const s3 = new AWS.S3();
// router.post('/:pollyId', (req, res) => {
//     // const params = {
//     //     Bucket: 'pollybucket223',
//     //     Key: 'milkteaPolly.mp3'
//     // };
//     const pollyId = req.params.pollyId;
//     const getParams = {
//         Bucket: "pollybucket223",
//         Key: `${pollyId}.mp3`
//     };
    
//     s3.getSignedUrl('getObject', getParams, function(err, url) {
//         if(err) { throw {msg:err, code:"AWS_ERROR"}; }
//         else {
//             return url;
//         }
//     });
// });

module.exports = router;
