

<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img width="267" alt="logo" src="https://user-images.githubusercontent.com/35549653/69471187-03742480-0de0-11ea-9e76-af12e1d85bf1.png" alt="Logo">
  </a>

  <h3 align="center">POLLYSK</h3>

  <p align="center">
    느려도 괜찮은 키오스크, 폴리스크 <br/>
Kiosk for Everyone <br/>
* AWS Rekognition을 통해 사용자 나이 분석 후 노인을 위한 UI로 변경 <br/>
* AWS Polly를 이용한 시각장애인을 위한 음성메뉴 서비스
    <br />
   </p>

&nbsp;
<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Requirements](#requirements)
  * [Installation](#installation)
* [Details](#details) 
  * [Architecture](#architecture) 
  * [Deploy](#deploy)
  * [Links](#links)
  * [Demo](#demo)
 * [Contanct](#contact)

&nbsp;
<!-- ABOUT THE PROJECT -->
## About The Project

![IMG_3790](https://user-images.githubusercontent.com/35549653/69472507-7c7a7880-0dee-11ea-8e52-06fc6518d274.JPG)

<div align="center">
<br/>
2019학년도 AWS 해커톤 <br/>
    <b>모두가 편하게 사용할 수 있는 키오스크, 폴리스크</b>
</div>


&nbsp;
### Built With

*   Node.js + Express
*  MySQL
* React.js

&nbsp;
<!-- GETTING STARTED -->
## Getting Started



### Prerequisites

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node

- #### Node installation on Windows

Just go on [official Node.js website](https://nodejs.org/) and download the installer.

Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

You can install nodejs and npm easily with apt install, just run the following commands.
```
$ sudo apt install nodejs
$ sudo apt install npm
```
&nbsp;
- #### Other Operating Systems

You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).
&nbsp;
If the installation was successful, you should be able to run the following command.
```
$ node --version
```
v8.11.3
&nbsp;
```
$ npm --version
```
v6.1.0
&nbsp;
If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.
```
$ npm install npm -g
```
&nbsp;
### Dependencies for Client
```
"devDependencies": {
	"@babel/core": "^7.0.0-0",
	"@babel/plugin-proposal-class-properties": "^7.1.0",
	"@babel/plugin-proposal-decorators": "^7.7.0",
	"@babel/plugin-transform-runtime": "^7.6.2",
	"@babel/preset-env": "^7.7.1",
	"@babel/preset-react": "^7.7.0",
	"aws-sdk": "^2.577.0",
	"babel-core": "^6.26.3",
	"babel-loader": "^8.0.6",
	"babel-plugin-module-resolver": "^3.2.0",
	"babel-plugin-transform-runtime": "^6.23.0",
	"babel-preset-env": "^1.7.0",
	"babel-runtime": "^6.26.0",
	"mobx": "^5.9.0",
	"mobx-react": "^5.4.3",
	"parcel-bundler": "^1.12.3",
	"react": "^16.8.0",
	"react-dom": "^16.8.0",
	"react-router-dom": "^5.1.2",
	"react-webcam": "^4.0.0",
	"semantic-ui-react": "^0.88.1",
	"styled-components": "^4.4.0",
	"react-html5-camera-photo": "^1.5.2",
	"axios": "^0.19.0"
},

"dependencies": {
	"base64-to-image": "^1.0.2"
}
```

&nbsp;
### Dependencies for Server
```
"dependencies": {
	"aws-sdk": "^2.575.0",
	"axios": "^0.19.0",
	"body-parser": "^1.19.0",
	"cookie-parser": "~1.4.4",
	"cors": "^2.8.5",
	"debug": "~2.6.9",
	"express": "~4.16.1",
	"http-errors": "^1.6.3",
	"jade": "~1.11.0",
	"morgan": "~1.9.1",
	"multer": "^1.4.2",
	"multer-s3": "^2.9.0",
	"promise-mysql": "^4.1.1"
}
```
&nbsp;
### Installation

1. Clone the repo
```sh
$ git clone https://github.com/4AMPOLLY/POLLYSK.git
```
2. install modules
```sh
$ npm install
```
4. Run server
```
$ npm start
```
&nbsp;
## Details 

### Architecture
![폴리스크 001](https://user-images.githubusercontent.com/35549653/69472605-99fc1200-0def-11ea-8fff-491d18d37b78.jpeg)
### Deploy
* AWS EC2
&nbsp;
### Links
* Project Link: [https://github.com/4AMPOLLY/POLLYSK](https://github.com/4AMPOLLY/POLLYSK)
&nbsp;
### Demo

<div align="center">


<img width="700" height="380" alt="스크린샷 2019-11-23 오후 12 53 26" src="https://user-images.githubusercontent.com/35549653/69472667-6077d680-0df0-11ea-9d18-4f038fa863f8.png">
&nbsp;
&nbsp;
<img width="1389" alt="스크린샷 2019-11-23 오후 12 53 48" src="https://user-images.githubusercontent.com/35549653/69472672-79808780-0df0-11ea-98fe-fb9d7c2f96ab.png">
&nbsp;
&nbsp;
<img width="1382" alt="스크린샷 2019-11-23 오후 12 53 58" src="https://user-images.githubusercontent.com/35549653/69472676-81d8c280-0df0-11ea-8f80-fae138306a77.png">
&nbsp;
&nbsp;
<img width="1323" alt="스크린샷 2019-11-23 오후 12 54 06" src="https://user-images.githubusercontent.com/35549653/69472677-87cea380-0df0-11ea-80a7-98aa9c7c1d42.png">


</div>

<!-- CONTACT -->
&nbsp;

## Contact

 - 이시연 ([siyeons](https://github.com/siyeons)) : Server, AWS EC2/RDS/S3/REKOGNITION
 - 김주현 ([juhyeon96](https://github.com/juhyeon96)) : Server, AWS REKOGNITION
 - 윤서현 ([seohyun0120](https://github.com/seohyun0120)) : Client, AWS Polly
 - 신동선 ([shindongsun0](https://github.com/shindongsun0)) : Server, AWS Polly



