const express = require('express')
const router = express.Router()
module.exports = router

const AWS = require('aws-sdk');
AWS.config.loadFromPath(__dirname + '/pollyConfig.json');

router.get('/:pollyName', (req, res) => {
    const s3 = new AWS.S3();
    const params = {
        Bucket: "pollybucket223",
        Key: `${pollyName}.mp3`,
    };
    s3.getSignedUrl('getObject', params, function(err, url) {
        if(err) { throw {msg:err, code:"AWS_ERROR"}; }
        else {
            return url;
        }
    });
})
// const pollyName = "teaPolly";
// const s3 = new AWS.S3();
// const params = {
//     Bucket: "pollybucket223",
//     Key: `${pollyName}.mp3`,
// };
// s3.getSignedUrl('getObject', params, function(err, url) {
//     if(err) { throw {msg:err, code:"AWS_ERROR"}; }
//     else {
//         console.log(JSON.stringify(url));
//         return JSON.stringify(url);
//     }
// });

module.exports = router;
