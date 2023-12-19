'use client'

import Script from 'next/script'
import { Map } from 'react-kakao-maps-sdk'

declare global {
  interface Window {
    kakao: any
  }
}

export default function KakaoMap() {
  //   const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=db6b154027b600cad6968760f833580a&autoload=false`
  const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY}&autoload=false`
  console.log(KAKAO_SDK_URL)
  return (
    <>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <Map center={{ lat: 33.450701, lng: 126.570667 }} style={{ width: '600px', height: '600px' }}></Map>
    </>
  )
}
