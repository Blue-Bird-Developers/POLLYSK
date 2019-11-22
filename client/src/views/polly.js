import axios from 'axios'

export default function getPolly(params) {
  const result = axios
    .get('https://inmp3pollybucket.s3.ap-northeast-2.amazonaws.com/' + params)
    .then(function (res) {
      const url = res.config.url
      const onAudio = url => {
        const audio = new Audio()

        document.body.appendChild(audio)
        audio.src = url

        const onAudioStopped = () => {
          audio.removeEventListener('pause', onAudioStopped)
          audio.remove()
        }

        audio.addEventListener('pause', onAudioStopped)
        audio.load()
        audio.play()
      }
      onAudio(url)
    })
}