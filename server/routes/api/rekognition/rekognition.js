const express = require('express');
const router = express.Router();
const util = require('../../../module/util');
const code = require('../../../module/statusCode');
const msg = require('../../../module/responseMessage');
const AWS = require('aws-sdk');
AWS.config.loadFromPath(__dirname + '/rekoConfig.json');
const User = require('../../../model/User')
const rekognition = new AWS.Rekognition();


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
                    "Bucket": "rekogtest12",
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

                    res.json(detectedAge);
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
    
    //TODO:나이output내는방식..평균내는것말고
    return parseInt((low + high) / 2);
}

module.exports = router;
