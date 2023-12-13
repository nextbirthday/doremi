import Footer from '@/app/components/footer/footer'
import Header from '@/app/components/header/header'

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <Header />
        <div style={{ padding: '2rem 3rem 2rem 3rem' }}>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
