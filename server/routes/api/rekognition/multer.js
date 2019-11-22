const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');
aws.config.loadFromPath(__dirname + '/rekoConfig.json');

const s3 = new aws.S3();
const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'pollysk-s3'    ,
        acl: 'public-read',
        key: function (req, file, cb) {
            const fileName = Date.now() + '.' + file.originalname
            cb(null, fileName)
        }
    })
});
module.exports = upload;