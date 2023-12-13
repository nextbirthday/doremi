'use client'
import Search, { SearchProps } from 'antd/es/input/Search'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import VideoList from './components/videoList'
import VideoPlayer from './components/videoPlayer'
import './page.css'
import { YoutubeOutlined } from '@ant-design/icons'
const Youtube = () => {
  const [videoList, setVideoList] = useState()
  const [selectedVideo, setSelectedVideo] = useState(null)

  const fetchYoutube = async (keyword?: any) => {
    console.log('fetchYoutube keyword ===>', keyword)
    await axios
      .get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${keyword}&key=AIzaSyDE_7smZNSc-J4c7p44-gnbICMl5wKmI2g`)
      .then((result: { data: { items: any } }) => {
        console.log('result.data.items ===>', result.data.items)
        setVideoList(result.data.items)
      })
      .catch((error: any) => console.log(error))
  }

  const onSearchYoutube: SearchProps['onSearch'] = async (value, _e, info) => {
    const keyword = value
    fetchYoutube(keyword)
  }
  const selectVideo = (video: any) => {
    setSelectedVideo(video)
  }

  useEffect(() => {
    const initial = '아이유'
    fetchYoutube(initial)
  }, [])
  console.log('selectVideo ===>', selectVideo)
  return (
    <div>
      <div className="youtube_header">
        <div style={{ marginRight: '440px' }}>
          <span className="youtube_icon">
            <YoutubeOutlined />
          </span>
          <span className="youtube_title">Youtube</span>
        </div>
        <div className="search_input">
          <Search placeholder="검색" onSearch={onSearchYoutube} size="large" allowClear={true} style={{ width: 600 }} />
        </div>
      </div>

      {selectedVideo && (
        <div>
          <VideoPlayer video={selectedVideo} />
        </div>
      )}
      <VideoList videoList={videoList} selectVideo={selectVideo} />
    </div>
  )
}

export default Youtube
