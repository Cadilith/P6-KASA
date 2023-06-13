function linebreak(text) {
  return text.replace(' ', '\n')
}
function ProfilePicture({ picture, name }) {
  return (
    <div className="profile">
      <p>{linebreak(name)}</p>
      <img src={picture} alt={name} />
    </div>
  )
}

export default ProfilePicture
