import Header from './components/header/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
