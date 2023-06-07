import Banner from '../../components/Banner/'
import Card from '../../components/Card/'
import logements from '../../datas/logements.json'
import { Link } from 'react-router-dom'
import homeBanner from '../../assets/banner.png'
import './home.scss'

const banner = 'banner'

function Home() {
  return (
    <main>
      <Banner img={homeBanner} className={banner} />
      <div className="lodging-cards-container">
        {logements.map((lodging) => (
          <Link key={`estate-${lodging.id}`} to={`/estate/${lodging.id}`}>
            <Card key={lodging.id} cover={lodging.cover} name={lodging.title} />
          </Link>
        ))}
      </div>
    </main>
  )
}

export default Home
