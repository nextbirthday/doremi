'use client'
import { faCheckCircle, faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useState } from 'react'

const Covid = () => {
  const [isOpen, setIsOpen] = useState(true)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className="covid19-outter" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div className="covid19-inner" style={{ width: '1000px', border: '1px solid lightgrey', padding: '15px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span>
              <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#00CC99' }} />
              &nbsp;
            </span>
            <div style={{ display: 'inline-block' }}>코로나19(COVID-19) 관련 안내</div>
            <button style={{ marginLeft: 'auto', border: 'none', background: 'none', cursor: 'pointer' }} onClick={toggleOpen}>
              <FontAwesomeIcon icon={isOpen ? faTimes : faChevronDown} style={{ color: '#00CC99' }} />
            </button>
          </div>
          <div style={{ maxHeight: isOpen ? '1000px' : '0px', overflow: 'hidden', transition: 'ease-in-out', padding: '0.3rem 0 0 1.3rem' }}>
            <div>코로나19(COVID-19)와 관련하여 최근 발표된 제한 조치 및 권고사항을 여행 전에 확인하세요.</div>
            <div style={{ padding: '0.1rem 0 0 0 ' }}>
              <Link href="https://www.0404.go.kr/dev/main.mofa">더 알아보기</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Covid
