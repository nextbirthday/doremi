'use client'
import Covid from '@/components/collapse/covid'
import React from 'react'

const Test = () => {
  // async function getData() {
  //   const res = await fetch('http://localhost:9000/boards')
  //   // The return value is *not* serialized
  //   // You can return Date, Map, Set, etc.

  //   if (!res.ok) {
  //     // This will activate the closest `error.js` Error Boundary
  //     throw new Error('Failed to fetch data')
  //   }

  //   return res.json()
  // }

  // const data = await getData()

  // console.log('data', data)

  return (
    <>
      <Covid />
    </>
  )
}

export default Test
