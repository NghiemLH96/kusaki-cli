import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'

export default function MainStructure() {

  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
