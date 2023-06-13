import Carrousel from '../../components/Carrousel'
import Collapse from '../../components/Collapse'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../../index.scss'
import './estate.scss'
import ProfilePicture from '../../components/ProfilePicture'
import Rating from '../../components/Rating'

function Estate() {
  const { id } = useParams()
  const [data, setData] = useState()
  //fetch data
  const getData = () => {
    fetch('../logements.json', {
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

  if (data) {
    let estate = data.filter((d) => d.id === id)
    return (
      <main>
        <article className="estate">
          <Carrousel slides={estate[0].pictures} />
          <section className="estate-details">
            <div className="estate-details-header">
              <div className="estate-title-container">
                <h1>{estate[0].title}</h1>
                <p>{estate[0].location}</p>
                <ul className="tag-container">
                  {estate[0].tags.map((tag, index) => {
                    return (
                      <li key={index} className="tag">
                        {tag}
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div className="estate-owner-container">
                <ProfilePicture
                  picture={estate[0].host.picture}
                  name={estate[0].host.name}
                />
                <Rating rating={estate[0].rating} />
              </div>
            </div>
            <div className="estate-collapsibles">
              <Collapse collapseTitle={'Description'}>
                <p>{estate[0].description}</p>
              </Collapse>
              <Collapse collapseTitle={'Équipements'}>
                <ul>
                  {estate[0].equipments.map((equipment, index) => {
                    return <li key={index}>{equipment}</li>
                  })}
                </ul>
              </Collapse>
            </div>
          </section>
        </article>
      </main>
    )
  }
}

export default Estate
