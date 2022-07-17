import React from 'react'
import '../styles/videoPlay.css'
import video from '../../video/file.mp4'

const VideoPlayer = () => {
  return (
    <div className='videoplayer_conted'>

      <div className="video_container">
      <video src={video}  controls autoPlay loop className='videoplay'></video>
      </div>
        

    </div>
  )
}

export default VideoPlayer