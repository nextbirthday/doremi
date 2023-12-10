import Link from 'next/link'
const temp = () => {
  return (
    <>
      {' '}
      <section style={{ textAlign: 'center' }}>
        <h1>
          <a href="/">WEB</a>
        </h1>
        <ol>
          <li>
            <Link href="/read/1">HTML</Link>
          </li>
          <li>
            <Link href="/read/2">CSS</Link>
          </li>
        </ol>
        <h2>
          Welcome <br />
          Hello, Web Page!
        </h2>
        {/*   <img src="/images/jobs/nexon.svg" alt="넥슨로고" style={{ width: '360px', height: '240px' }} /> */}
        <ul>
          <li>
            <Link href="/create">CREATE</Link>
          </li>
          <li>
            <Link href="/update/1">UPDATE</Link>
          </li>
          <li>
            <input type="button" value="DELETE" />
          </li>
        </ul>
      </section>
    </>
  )
}

export default temp
