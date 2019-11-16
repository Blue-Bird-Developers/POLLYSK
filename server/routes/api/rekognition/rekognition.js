const express = require('express')
const router = express.Router()

module.exports = router

const AWS = require('aws-sdk');
AWS.config.loadFromPath('./awscreds.json');
const Polly = new AWS.Polly({
    signatureVersion: 'v4',
    region: 'ap-northeast-2'
});

const s3 = new AWS.S3();

router.get('/:pollyid', (req, res) => {
    const pollyId = req.params.pollyId;
    
    if(!pollyId){
        res.status(code.BAD_REQUEST)
        .send(util.successFalse(responseMessage.NULL_VALUE));
        return;
    } else {
        const urlFound = {
            url : converTextIntoSpeech(menus[pollyId])
        };
        res.json(urlFound);
    }
});
const doyouwantPolly = {
    id: "0",
    name: "doyouwantPolly",
    text: "음성안내를 원하시면 더블클릭 해주세요. 그렇지 않으면 한번 클릭해주세요."
}
const categoryPolly = {
    id: "1",
    name: "categoryPolly",
    text: "밀크티, 커피, 티 중 원하시는 카테고리를 말씀해주세요"
}
const milkteaPolly = {
    id: "2",
    name: "milkteaPolly",
    text: '1번. 차얌 밀크티, 2번. 타로 밀크티, 3번. 말차 밀크티, 4번. 블랙 밀크티, 5번. 얼그레이 밀크티, 6번. 우롱 밀크티가 있습니다. 어떤 메뉴를 선택하시겠습니까?'
}
const coffeePolly = {
    id: "3",
    name: "coffeePolly",
    text: '1번. 아메리카노, 2번. 카페라떼, 3번. 바닐라라떼, 4번. 말차라떼, 5번. 초코라떼, 6번. 티라떼가 있습니다. 어떤 메뉴를 선택하시겠습니까?'
}
const teaPolly = {
    id: "4",
    name: "teaPolly",
    text: '1번. 잉글리시블랙퍼스트, 2번. 우롱, 3번. 얼그레이, 4번. 차얌블랙티가 있습니다. 어떤 메뉴를 선택하시겠습니까?'
}
const sizePolly = {
    id: "5",
    name: "sizePolly",
    text: '음료사이즈는 대, 중, 소가 있습니다. 어떤 사이즈를 선택하시겠습니까?'
}
const addmenuPolly = {
    id: "6",
    name: "addmenuPolly",
    text: "추가주문은 1번, 바로결제는 2번이라고 말씀해주세요."
}
const finishmentPolly = {
    id: "7",
    name: "finishmentPolly",
    text: "신용 카드 혹은 삼성페이로 결제를 시작해주세요"
}
const thankyouPolly = {
    id: "8",
    name: "thankyouPolly",
    text: "주문해주셔서 감사합니다."
}
const menus = [
        doyouwantPolly, categoryPolly, milkteaPolly, coffeePolly, teaPolly, sizePolly, addmenuPolly, finishmentPolly, thankyouPolly
]

const converTextIntoSpeech = (menu) => {
    const menu_polly_params = {
        Text: menu.text,
        TextType: 'text',
        OutputFormat: 'mp3',
        VoiceId: 'Seoyeon'
    }
    const key = `${menu.name}.mp3`
    const isFileExists = await s3.isObjectExists(
        process.env.pollybucket223,
        key,
    )
    if (ifFileExists){
        return res.json(encodeURI(URL));
    }
    else{
        const data = await Polly.synthesizeSpeech(menu_polly_params).promise();
        
            //2번. 음성을 S3에 올린다.
        const s3params = {
            Body: data.AudioStream, 
            Bucket: "pollybucket223", 
            Key: `${menu.name}.mp3`,
            ACL: "public-read"
        };
        
        s3.upload(s3params,function(err, data) {
            if (err) throw err
            else {
                return data.Location;
            }
        });
    }
}

module.exports = router;
