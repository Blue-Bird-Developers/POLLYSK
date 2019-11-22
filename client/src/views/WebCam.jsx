import React, { Component } from 'react'
import Camera from 'react-html5-camera-photo'
import 'react-html5-camera-photo/build/css/index.css'
import axios from 'axios'
import { Button } from 'semantic-ui-react'
import styled from 'styled-components'

class WebCam extends Component {
  state = {
    id: 0,
    age: 0
  }

  onTakePhoto(dataUri) {
    const file = base64ToJpgImage(dataUri)
    console.log(file)

    const form = new FormData()
    form.append('file', file)
    form.append('name', 'file')

    axios.post(`http://10.101.50.32:3001/api/rekognition`, form)
      .then((res) => {
        this.setState({
          id: res.data.data.userId
        })
      }).catch(function (error) {
        console.log(error);
      })
  }

  getAge(id) {
    axios.post(`http://10.101.50.32:3001/api/rekognition/` + id)
      .then((res) => {
        console.log('getAge', res)
        this.setState({ age: res.data.data.age })
      })
  }

  onAgeDetected = (fontSize) => {
    document.getElementsByTagName('html')[0].style.fontSize = fontSize + 'px'
  }

  render() {
    return (
      <div>
        <Camera
          onTakePhoto={dataUri => { this.onTakePhoto(dataUri) }}
        />
        <Button inverted color='blue' onClick={() => this.getAge(this.state.id)}>연령 확인</Button>
        <Button inverted color='red' onClick={() => this.onAgeDetected(20)}>+</Button>
        <Title>고객님의 연령은 {this.state.age}입니다.</Title>
      </div>
    )
  }
}

function base64ToJpgImage(dataUri) {
  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?)/)[1],
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

const Title = styled.div`
  font-size: 2rem;
  font-weight: 700;
`