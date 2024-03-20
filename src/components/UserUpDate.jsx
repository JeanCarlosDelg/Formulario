import './styles/UserUpDate.css'

const UserUpDate = ({ nameUpDate, upDateClose, setUpDateClose }) => {

  const handleUpDate = () => {
    setUpDateClose(true)
  }

  return (
    <div className={`upDate__container ${upDateClose && 'upDate__close'}`}>
      <article className='upDate'>
        <h2 className="upDate__subTitle">{`the user ${nameUpDate} was updated successfully`}</h2>
        <button onClick={handleUpDate} className="upDate__btn">Accept</button>
      </article>
    </div>
  )
}

export default UserUpDate