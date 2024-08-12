import './home.scss'
import '../page.scss'
import HomeCarousel from './components/banner/HomeCarousel'

export default function Home() {
  return (
    <section className='page__container'>
        <HomeCarousel/>
    </section>
  )
}
