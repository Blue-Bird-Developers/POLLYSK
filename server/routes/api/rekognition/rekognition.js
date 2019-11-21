const express = require('express');
const router = express.Router();
const util = require('../../../module/util');
const code = require('../../../module/statusCode');
const msg = require('../../../module/responseMessage');
const AWS = require('aws-sdk');
AWS.config.loadFromPath(__dirname+'/rekoConfig.json');
const User = require('../../../model/User')
const axios = require('axios')

const rekognition = new AWS.Rekognition();

router.post('/:userId', (req, res) => {
    const userId = req.params.userId;
    var faceSingle = '';

<<<<<<< Updated upstream
    if(!userId){
=======

    if (!userId) {
>>>>>>> Stashed changes
        res.status(code.BAD_REQUEST)
        .send(util.successFalse(responseMessage.NULL_VALUE));
        return;
    }

<<<<<<< Updated upstream
    User.read({userId})
    .then(face => {
        faceSingle = face.face;
        console.log(face.face);
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
    
    // .then(({code, json})=>{
    //     res.status(code).send(json)
    // });


  // rekognition의 detectText 함수에 필요한 parameter 변수입니다.
    const params = {
        Image: {
            Bytes: faceSingle
        }
    }

    rekognition.detectFaces(params, (error, data) => {
        if(error) {
            res.send(error);
        }
        else {
            if(data.FaceDetails && data.FaceDetails.length > 0) {
                const detectedAge = {
                    age : detectUserAgeRange(data)
                };
                res.json(detectedAge);
            }
            else {
                const invalidAge = {
                    age : "none"
                };
                res.json(invalidAge);
            }
        }
    });
=======
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
                                //.then((json) => res.send(json))
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
>>>>>>> Stashed changes
});

const detectUserAgeRange = (data) => {
    const ageRangeFromFace = data.FaceDetails[0].AgeRange;
    const low = ageRangeFromFace.Low;
    const high = ageRangeFromFace.High;

<<<<<<< Updated upstream
    //TODO : 나이 output 내는 방식 .. 평균내는 것 말고
    return parseInt(low+high / 2);
=======
    //TODO:나이output내는방식..평균내는것말고
    return parseInt((low + high) / 2);
>>>>>>> Stashed changes
}

module.exports = router;