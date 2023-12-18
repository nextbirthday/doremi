import Footer from '@/app/components/footer/footer'
import Header from '@/app/components/header/header'
import Sidebar from './components/sidebar'
import './layout.css'
export default function MypageLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <Header />
        <div style={{ padding: '2rem 3rem 2rem 3rem' }}>
          <div className="mypage_wrap">
            <Sidebar />
            <div className="mypage_article_right">{children}</div>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  )
}
