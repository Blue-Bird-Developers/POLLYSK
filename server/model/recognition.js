let ageRange;

module.exports = {

    setAgeRangeToJson: ({detectedAge}) => {
        this.ageRange = detectedAge;
    },

    getAgeRange: () => {
        return this.ageRange;
    },

    detectUser: ({rekognition, inputImage}) => {
        const params = {
            "Image": {
                "S3Object": {
                    "Bucket": "bucketname",
                    "Name": inputImage
                }
            },
            "Attributes": ["ALL"]
        }

        return rekognition.detectFaces(params, function(error, data) {
            let detectedAge;

            if(error) {
                console.log(error, error.stack);

                throw error;
            }
            else {

                if(data.FaceDetails && data.FaceDetails.length>0) {
                    detectedAge = {
                        age : detectUserAgeRange(data)
                    };

                    setAgeRangeToJson(detectedAge);
                }
                else {
                    detectedAge = {
                        age: "none"
                    };

                    setAgeRangeToJson(detectedAge);
                }

            }
        })
    },

    detectUserAgeRange: ({data}) => {
        var ageRangeFromFace = data.FaceDetails[0].AgeRange;
        var low = ageRangeFromFace.Low;
        var high = ageRangeFromFace.High;

        //TODO : 나이 output 내는 방식 .. 평균내는 것 말고
        return parseInt(low+high / 2);
    }
};