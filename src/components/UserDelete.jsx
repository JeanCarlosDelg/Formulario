import './styles/DeleteUser.css'

const UserDelete = ({ deleteIsClose, setDeleteIsClose, deleteUsers, userId }) => {

  const handleOpenDeleteAccept = () => {
    deleteUsers("/users/", userId.id)
    setDeleteIsClose(true)
  }

  const handleOpenDeleteCancel = () => {
    setDeleteIsClose(true)
  }

  return (
    <div className={`delete__container ${deleteIsClose && 'delete__close'}`}>
      <article className='delete'>
        <h2 className='delete__subTitle'> User Deleted </h2>
        <p>Are you sure to eliminate <span className='name__delete'>{`${userId?.first_name} ${userId?.last_name}`}</span>?</p>
        <div className='delete__exit' onClick={handleOpenDeleteCancel}>X</div>
        <button className='delete-user__btn' onClick={handleOpenDeleteAccept}>Accept</button>
        <button className='delete-user__btn' onClick={handleOpenDeleteCancel}>Cancel</button>
      </article>
    </div>
  )
}

export default UserDelete