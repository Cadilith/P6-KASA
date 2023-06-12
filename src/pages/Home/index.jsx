import Banner from '../../components/Banner/'
import Card from '../../components/Card/'
import { Link } from 'react-router-dom'
import homeBanner from '../../assets/banner.webp'
import './home.scss'
import { useEffect, useState } from 'react'

const banner = 'banner'

function Home() {
  const [data, setData] = useState([])
  //fetch data
  const getData = () => {
    fetch('logements.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        return response.json()
      })
      .then(function (myJson) {
        setData(myJson)
      })
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <main>
      <Banner img={homeBanner} className={banner} />
      <div className="lodging-cards-container">
        {data &&
          data.length > 0 &&
          data.map((lodging) => (
            <Link key={`estate-${lodging.id}`} to={`/estate/${lodging.id}`}>
              <Card
                key={lodging.id}
                cover={lodging.cover}
                name={lodging.title}
              />
            </Link>
          ))}
      </div>
    </main>
  )
}

export default Home
