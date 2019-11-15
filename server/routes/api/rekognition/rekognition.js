const express = require('express');
const router = express.Router();
const AWS = require('aws-sdk');
const rekognition = new AWS.Rekognition(
    //config : region
);

router.post('/api/rekognition/rekognition', function(request, response, next) {
    const face = //read();
    const param = {
        "Image": {
            "Bytes": face,
        },
        "Attributes": ["ALL"]
    }

    rekognition.detectFaces(param, function(error, data) {
        if(error) {
            response.send(error);
        }
        else {

            if(data.FaceDetails && data.FaceDetails.length>0) {
                const detectedAge = {
                    age : detectUserAgeRange(data)
                };

                response.json(detectedAge);
            }
            else {
                const invalidAge = {
                    age : "none"
                };

                response.json(invalidAge);
            }

        }
    });
});

const detectUserAgeRange = function(data) {
    const ageRangeFromFace = data.FaceDetails[0].AgeRange;
    const low = ageRangeFromFace.Low;
    const high = ageRangeFromFace.High;

    //TODO : 나이 output 내는 방식 .. 평균내는 것 말고
    return parseInt(low+high / 2);
}

module.exports = router;