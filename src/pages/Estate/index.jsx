import Carrousel from '../../components/Carrousel'
import Collapse from '../../components/Collapse'

function Estate() {
  return (
    <main>
      <article className="estate">
        <Carrousel slides={data.pictures} />
        <section className="estate-details">
          <div className="estate-title-container">
            <h1>{data.title}</h1>
            <p>{data.location}</p>
            <ul className="tag-container">
              {data.tags.map((tag, index) => {
                return (
                  <li key={index} className="tag">
                    {tag}
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="estate-owner-container">
            <div className="estate-owner-profile">
              <img src={data.host.picture} alt={data.host.name} />
              <span className="estate-owner-rating">{data.rating}</span>
            </div>
          </div>
          <div className="estate-collapsibles">
            <Collapse collapseTitle={'Description'}>
              <p>{data.description}</p>
            </Collapse>
            <Collapse collapseTitle={'Équipements'}>
              {data.equipements.map((equipement, index) => {
                return <li key={index}>{equipement}</li>
              })}
            </Collapse>
          </div>
        </section>
      </article>
    </main>
  )
}

export default Estate
