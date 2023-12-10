import React from 'react'

const Docs = ({ params }: { params: { slug: string[] } }) => {
  // http://localhost:3000/docs/params.slug[0]...
  if (params.slug.length === 1) {
    return <h1 className="text-5xl"> Viewing docs for feature {params.slug[0]} </h1>
  }
  // http://localhost:3000/docs/params.slug[0]/params.slug[1]...
  if (params.slug.length === 2) {
    return (
      <h1>
        Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}
      </h1>
    )
  }
  return <h1 className="text-5xl">Docs Page</h1>
}

export default Docs
