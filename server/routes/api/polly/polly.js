const express = require('express')
const router = express.Router()

module.exports = router

const AWS = require('aws-sdk');
AWS.config.loadFromPath(__dirname+'/pollyConfig.json');
const Polly = new AWS.Polly({
    signatureVersion: 'v4',
    region: 'ap-northeast-2'
});

const s3 = new AWS.S3();
const doyouwantPolly = {
    name: "doyouwantPolly",
    text: "음성안내를 원하시면 더블클릭 해주세요. 그렇지 않으면 한번 클릭해주세요."
}
const categoryPolly = {
    name: "categoryPolly",
    text: "밀크티, 커피, 티 중 원하시는 카테고리를 말씀해주세요"
}
const milkteaPolly = {
    name: "milkteaPolly",
    text: '1번. 차얌 밀크티, 2번. 타로 밀크티, 3번. 말차 밀크티, 4번. 블랙 밀크티, 5번. 얼그레이 밀크티, 6번. 우롱 밀크티가 있습니다. 어떤 메뉴를 선택하시겠습니까?'
}
const coffeePolly = {
    name: "coffeePolly",
    text: '1번. 아메리카노, 2번. 카페라떼, 3번. 바닐라라떼, 4번. 말차라떼, 5번. 초코라떼, 6번. 티라떼가 있습니다. 어떤 메뉴를 선택하시겠습니까?'
}
const teaPolly = {
    name: "teaPolly",
    text: '1번. 잉글리시블랙퍼스트, 2번. 우롱, 3번. 얼그레이, 4번. 차얌블랙티가 있습니다. 어떤 메뉴를 선택하시겠습니까?'
}
const sizePolly = {
    name: "sizePolly",
    text: '음료사이즈는 대, 중, 소가 있습니다. 어떤 사이즈를 선택하시겠습니까?'
}
const addmenuPolly = {
    name: "addmenuPolly",
    text: "추가주문은 1번, 바로결제는 2번이라고 말씀해주세요."
}
const finishmentPolly = {
    name: "finishmentPolly",
    text: "신용 카드 혹은 삼성페이로 결제를 시작해주세요"
}
const thankyouPolly = {
    name: "thankyouPolly",
    text: "주문해주셔서 감사합니다."
}

const menus = [
    categoryPolly, milkteaPolly, coffeePolly, teaPolly, sizePolly, addmenuPolly, finishmentPolly, thankyouPolly
]

async function converTextIntoSpeech(menus) {
    menus.forEach(async (menu) => {
        const menu_polly_params = {
            Text: menu.text,
            TextType: 'text',
            OutputFormat: 'mp3',
            VoiceId: 'Seoyeon'
        }
    
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
        });
    })
}

//converTextIntoSpeech(menus);
