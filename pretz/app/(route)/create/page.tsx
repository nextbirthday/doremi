'use client'
import { useRouter } from 'next/navigation'
import React, { FormEvent, ChangeEvent } from 'react'

const Create = () => {
  /* next/router는 Next 12 version에서 사용, next/navigation 에서 import  */
  const router = useRouter()

  const handleSubmit = (e: any) => {
    e.preventDefault()
    // const formData = new FormData(e.target as HTMLFormElement)
    // const title = formData.get('title') as string
    const title = e.target.title.value
    const body = e.target.body.value
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({ title, body }),
    }
    console.log('title ===>', title)
    console.log('body ===>', body)

    fetch(`http://localhost:9999/topics`, options)
      .then((response) => response.json())
      .then((result) => {
        console.log('result ===>', result)
        const createdID = result.id
        router.push(`/read/${createdID}`)
        router.refresh()
      })

      // es5 es6

      
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '2rem' }}>
      <p>
        <input type="text" name="title" placeholder="title" />
      </p>
      <p>
        <textarea name="body" placeholder="body"></textarea>
      </p>
      <p>
        <input type="submit" value="create" />
      </p>
    </form>
  )
}

export default Create
