/* eslint-disable @next/next/no-img-element */
import React from 'react'
import './videoItem.css'
import Link from 'next/link'
const VideoItem = (props: any) => {
  const { video, selectVideo } = props
  return (
      <Link href={`/watch/${video.id.videoId}`}>
          <div className="video_item" /* onClick={() => selectVideo(video)} */>
            <div>
              <img className="video_thumbnail" src={video.snippet.thumbnails.medium.url} alt="썸네일" />
            </div>
            <div>
              <p className="video_title" key={video.id}>
                {video.snippet.title}
              </p>
              <p className="video_channel">{video.snippet.channelTitle}</p>
            </div>
          </div>
      </Link>
  )
}

export default VideoItem
