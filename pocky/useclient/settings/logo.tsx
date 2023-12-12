'use client'
import { Button, Col, Divider, Image, Row, Space, Upload } from 'antd'
import { useState } from 'react'
import { dividerMargin } from './site'

const Logo = () => {
  const [fileLists, setFileLists] = useState<any[]>([[]])

  const isImage = (file: File) => {
    return file.type.startsWith('image/')
  }

  const handleBeforeUpload = (file: File, index: number, onlyImage: boolean) => {
    if (!isImage(file) && onlyImage) {
      return false // 업로드 중단
    }
    const newFileLists = [...fileLists]
    newFileLists[index] = [file]
    setFileLists(newFileLists)
  }

  const handleFileChange = (fileList: any[], index: number) => {
    console.log(`handleFileChange ===> fileList`, fileList)
    console.log(`handleFileChange ===> index`, index)

    if (index === 0 && !fileList[0].originFileObj.type.startsWith('image/')) {
      alert('이미지 파일만 업로드 가능합니다.')
      return false
    }

    const newFileLists = [...fileLists]
    newFileLists[index] = fileList
    setFileLists(newFileLists)
  }

  /* file Upload */
  const renderUpload = (index: number, onlyImage: boolean) => {
    const uploadProps = {
      beforeUpload: (file: File) => handleBeforeUpload(file, index, onlyImage),
      onChange: ({ fileList }: { fileList: any[] }) => handleFileChange(fileList, index),
      fileList: fileLists[index],
    }

    const blob = new Blob([fileLists[index][0]?.originFileObj], { type: fileLists[index][0]?.originFileObj?.type })

    let thumbNail

    if (index === 0) {
      thumbNail = fileLists[index][0]?.url || (fileLists[index].length > 0 ? URL.createObjectURL(blob) : '')
    }
    return (
      <>
        {thumbNail && <Image src={thumbNail} width={360} height={360} />}
        <Upload {...uploadProps}>{fileLists[index].length === 0 && <Button type="primary">image upload</Button>}</Upload>
      </>
    )
  }

  return (
    <div className="border-solid border-2 border-red-500 p-2" style={{ width: '600px' }}>
      <p style={{ textAlign: 'center' }}>Site Logo</p>
      <Divider style={{ margin: dividerMargin }} />
      <div>
        <Col style={{ textAlign: 'end' }}>{renderUpload(0, true)}</Col>
      </div>
    </div>
  )
}

export default Logo
