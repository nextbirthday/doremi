import ManagerInfo from '@/components/settings/managerInformation'
import SiteInformation from '@/components/settings/siteInformation'
import Footer from '../clone/footer'
import Header from '../clone/header'

const Settings = () => {
  return (
    <>
      <Header />
      <div className="border-solid border-2 border-yellow-500">
        <h2 className="text-2xl font-bold p-2 ">사이트 설정</h2>
        <section className="p-2">
          <div className="flex justify-between" style={{ minHeight: '250px' }}>
            <div className="border-solid border-2 border-red-500 p-2" style={{ width: '600px' }}>
              <p>사이트 로고</p>
              <input type="file" id="fileUpload" />
            </div>
            <SiteInformation />
            <ManagerInfo />
          </div>
        </section>
        <div className="divide-y-2 divide-blue-300"></div>
        <section className="p-2">
          <div className="flex justify-between" style={{ minHeight: '250px' }}>
            <div className=" border-solid border-2 border-indigo-500 p-2 w-80">
              <p>블랙리스트</p>
              <input></input>
            </div>
            <div className=" border-solid border-2 border-indigo-500 p-2 w-80">
              <p>화이트리스트</p>
              <input></input>
            </div>
            <div className="border-solid border-2 border-indigo-500 p-2 " style={{ width: '600px' }}>
              <p>검색어</p>
              <input className="m-2" style={{ border: '1px solid black' }}></input>
              <input className="m-2" style={{ border: '1px solid black' }}></input>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Settings
