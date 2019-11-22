const express = require('express');
const router = express.Router();
const util = require('../../../module/util');
const code = require('../../../module/statusCode');
const msg = require('../../../module/responseMessage');
const AWS = require('aws-sdk');
AWS.config.loadFromPath(__dirname + '/rekoConfig.json');
const User = require('../../../model/User')
const rekognition = new AWS.Rekognition();

router.post('/', (req, res) => { //express optional paramter
    const face = req.data.base64Image;
    const s3Bucket = new AWS.S3({
        params: {
            Bucket: 'pollysk-s3'
        }
    });
    if (!face) {
        res.status(code.BAD_REQUEST)
            .send(util.successFalse(responseMessage.NULL_VALUE));
        return;
    }
    s3Bucket.putObject(face, function (err, data) {
        if (err) {
            console.log(err);
            console.log('Error uploading data: ', data);
        } else {
            console.log('succesfully uploaded the image!');
        }
    });
})

router.post('/:userId', (req, res) => {
    const userId = req.params.userId;
    var faceSingle = "";
    if (!userId) {
        res.status(code.BAD_REQUEST)
            .send(util.successFalse(responseMessage.NULL_VALUE));
        return;
    }

    User.read({
            userId
        })
        .then(face => {
            faceSingle = face.face;
            return {
                code: code.OK,
                json: util.successTrue('', faceSingle)
            };
        }).catch(err => {
            console.log(err);
            return {
                code: code.INTERNAL_SERVER_ERROR,
                json: util.successFalse(msg.INTERNAL_SERVER_ERROR)
            };
        })
        .then(faceSingle => {
            const imageURL = faceSingle.json.data;
            const fileName = imageURL.substr(imageURL.lastIndexOf('/') + 1);
            return fileName;
        })
        .then(input => {
            const params = {
                "Image": {
                    "S3Object": {
                        "Bucket": "pollysk-s3",
                        "Name": input
                    }
                },
                "Attributes": [
                    "ALL"
                ]
            }
            return params;
        })
        .then(params => {
            rekognition.detectFaces(params, (error, data) => {
                if (error) {
                    res.send(error);
                } else {
                    if (data.FaceDetails && data.FaceDetails.length > 0) {
                        const detectedAge = {
                            age: detectUserAgeRange(data)
                        };
                        const age = detectedAge.age;
                        console.log(detectedAge.age);
                        User.update({
                                userId,
                                age
                            })
                            .then(res.send(util.successTrue(msg.AGE_UPDATE_SUCCESS)))
                            .catch(err => {
                                console.log(err);
                                res.status(code.INTERNAL_SERVER_ERROR)
                                    .send(util.successFalse(msg.INTERNAL_SERVER_ERROR));
                            });
                    } else {
                        const invalidAge = {
                            age: "none"
                        };
                        res.json(invalidAge);
                    }
                }
            });
        })
});

const detectUserAgeRange = (data) => {
    const ageRangeFromFace = data.FaceDetails[0].AgeRange;
    const low = ageRangeFromFace.Low;
    const high = ageRangeFromFace.High;
    // return parseInt((low + high) / 2);
    return high;
}

module.exports = router;
