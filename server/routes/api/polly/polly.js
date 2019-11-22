const express = require('express')
const router = express.Router()


const AWS = require('aws-sdk');
AWS.config.loadFromPath(__dirname + '/pollyConfig.json');

router.get('/:pollyName', (req, res) => {
    const pollyName = req.params.pollyName;
    const s3 = new AWS.S3();
    const params = {
        Bucket: "pollybucket223",
        Key: `${pollyName}.mp3`,
    };
    s3.getSignedUrl('getObject', params, function(err, url) {
        if(err) { throw {msg:err, code:"AWS_ERROR"}; }
        else {
            console.log(url);
            res.json(url);
        }
    });

})

module.exports = router;