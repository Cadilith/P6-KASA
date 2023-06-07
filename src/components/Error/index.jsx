import { Link } from 'react-router-dom'
function Error() {
  return (
    <>
      <p>404</p>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to={'/'}>Retourner sur la page d'accueil</Link>
    </>
  )
}

export default Error
