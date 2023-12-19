import Footer from '@/app/components/footer/footer'
import Header from '@/app/components/header/header'
import './layout.css'
import Sidebar from '@/app/components/mypage/sidebar'
export default function MypageLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <Header />
        <div style={{ padding: '2rem 3rem 2rem 3rem' }}>
          <div className="mypage_wrap">
            <div className="mypage_article_left">
              <Sidebar />
            </div>
            <div className="mypage_article_right">{children}</div>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  )
}
