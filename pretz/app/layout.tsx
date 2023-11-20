import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Next js 14, PRETZ',
  description: 'Generated by doremi',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <h1>
          <Link href="/">WEB</Link>
        </h1>
        <ol>
          <li>
            <Link href="/read/html">html</Link>
          </li>
          <li>
            <Link href="/read/css">css</Link>
          </li>
        </ol>
        {children}
        <ul>
          <li>
            <Link href="/create">CREATE</Link>
          </li>
          <li>
            <Link href="/update/1">UPDATE</Link>
          </li>
          <li>
            <input type="button" value="DELETE"></input>
          </li>
        </ul>
      </body>
    </html>
  )
}
