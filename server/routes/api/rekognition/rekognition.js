const express = require('express');
const router = express.Router();
const util = require('../../../module/util');
const code = require('../../../module/statusCode');
const msg = require('../../../module/responseMessage');
const AWS = require('aws-sdk');
const config = require('../../../config/awsConfig')
const User = require('../../../model/User')
const axios = require('axios')

AWS.config.region = config.region;
const rekognition = new AWS.Rekognition(
    {
        region: config.region
    }
);

router.post('/:userId', (req, res) => {
    const userId = req.paramss.userId;
    var faceSingle = '';

    if(!userId){
        res.status(code.BAD_REQUEST)
        .send(util.successFalse(responseMessage.NULL_VALUE));
        return;
    }

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

    // const params = {
    //     "Image": {
    //         "Bytes": faceSingle,
    //     },
    //     "Attributes": ["ALL"]
    // }
    console.log(faceSingle);
//     const imageURL = req.query.imageURL
//   // 이미지 URL로부터 해당 이미지를 arraybuffer 형식으로 가져옵니다.
//     const responseImage = await axios.get(
//         imageURL,
//         { responseType: 'arraybuffer' }
//     )

//   // rekognition의 detectText 함수에 필요한 parameter 변수입니다.
//     const params = {
//         Image: {
//             Bytes: new Buffer(responseImage.data, 'binary')
//         }
//     }

//     rekognition.detectFaces(params, (error, data) => {
//         if(error) {
//             res.send(error);
//         }
//         else {
//             if(data.FaceDetails && data.FaceDetails.length > 0) {
//                 const detectedAge = {
//                     age : detectUserAgeRange(data)
//                 };
//                 res.json(detectedAge);
//             }
//             else {
//                 const invalidAge = {
//                     age : "none"
//                 };
//                 res.json(invalidAge);
//             }
//         }
//     });
// });

const detectUserAgeRange = (data) => {
    const ageRangeFromFace = data.FaceDetails[0].AgeRange;
    const low = ageRangeFromFace.Low;
    const high = ageRangeFromFace.High;

    //TODO : 나이 output 내는 방식 .. 평균내는 것 말고
    return parseInt(low+high / 2);
}

module.exports = router;

