import React, { Component } from 'react'
import Camera from 'react-html5-camera-photo'
import 'react-html5-camera-photo/build/css/index.css'
import axios from "axios"
const { base64ToImage } = require('base64-to-image')

class WebCam extends Component {
  onTakePhoto(dataUri) {
    const file = base64ToJpgImage(dataUri)

    console.log(file)
    // , {
    //   headers: { 'Content-type': 'multipart/form-data' }
    // }

    const form = new FormData();
    form.append("file", file);
    form.append("name", "file");


for (var value of form.values()) {

  console.log(value);

}
    axios.post(`http://10.101.50.32:3001/api/rekognition`, form)
      .then(res=> console.log(res))
      .catch(console.log)
  }

  render() {
    return (
      <div className='App'>
        <Camera
          onTakePhoto={dataUri => {
            this.onTakePhoto(dataUri)
          }}
        />
      </div>
    )
  }
}


function base64ToJpgImage(dataUri) {
  var path = "/Users/hyeon/Desktop"
  var optionalObj = { 'fileName': 'file', 'type': 'jpg' }

  // base64ToImage(dataUri, path, optionalObj)
  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n)

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }

    return new File([u8arr], filename, { type: mime })
  }

  return dataURLtoFile(dataUri, 'exam.jpg')
}

export default WebCam