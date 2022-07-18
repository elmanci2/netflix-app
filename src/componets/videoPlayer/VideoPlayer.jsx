
import '../styles/videoPlay.css'
import video from '../../video/file.mp4'
import { useParams } from 'react-router-dom'


const VideoPlayer = () => {


   const {url} = useParams()
   console.log(url);

let  videolin = 'https://www.fembed.com/v/z6-xqlsjq7jw1kr2'

  return (
    <section>
      <div className="elvideo_play">
        <iframe src={videolin}  width='100%' height='100%' controls loop buffered  preload autoplay  frameborder="0"></iframe>
      </div>
    </section>

  )
}

export default VideoPlayer