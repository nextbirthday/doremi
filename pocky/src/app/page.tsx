/* eslint-disable @next/next/no-sync-scripts */
import Home from '@/app/(route)/home/page'
import Provider from './components/provider/provider'
import SignInButton from './components/signInButton'

const Main = () => {
  return (
    <>
      <Provider>
        <Home />
      </Provider>
    </>
  )
}

export default Main
