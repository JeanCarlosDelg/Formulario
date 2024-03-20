import './styles/UserSucces.css'

const UserSucces = ({ setUserSucces, userSucces }) => {

  const handleAccept = () => {
    setUserSucces(true)
  }

  return (
    <div className={`succes__container ${userSucces && 'succes__close'}`}>
      <article className='succes'>
        <h2 className="succes__subTitle">User created successfully...</h2>
        <button onClick={handleAccept} className="succes__btn">Accept</button>
      </article>
    </div>
  )
}

export default UserSucces