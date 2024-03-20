
import { useEffect, useState } from 'react'
import './App.css'
import useCrud from './hooks/useCrud'
import FormUser from './components/FormUser'
import UsersCards from './components/UsersCards'
import UserDelete from './components/UserDelete'
import UserSucces from './components/UserSucces'
import UserUpDate from './components/UserUpDate'

function App() {

  const [userDate, setUserDate] = useState()
  const [formIsClose, setFormIsClose] = useState(true)
  const [deleteIsClose, setDeleteIsClose] = useState(true)
  const [userSucces, setUserSucces] = useState(true)
  const [nameUpDate, setNameUpDate] = useState()
  const [upDateClose, setUpDateClose] = useState(true)
  const [userId, setUserId] = useState()

  const BASEURL = 'https://users-crud.academlo.tech'
  const [users, getUsers, createUsers, deleteUsers, upDateUsers] = useCrud(BASEURL)

  useEffect(() => {
    getUsers('/users/')
  }, [])

  // console.log(users)
  const handleOpenForm = () => {
    setFormIsClose(false)
  }

  return (
    <div className='app'>
      <header className='app__header'>
        <h1 className='app__title'>Users</h1>
        <div className='btn__one'>
          <button onClick={handleOpenForm} className='app__btn'> + Create new user</button>
        </div>
      </header>
      <FormUser
        createUsers={createUsers}
        userDate={userDate}
        upDateUsers={upDateUsers}
        setUserDate={setUserDate}
        formIsClose={formIsClose}
        setFormIsClose={setFormIsClose}
        setUserSucces={setUserSucces}
        setNameUpDate={setNameUpDate}
        setUpDateClose={setUpDateClose}
      />
      <div className='user__container'>

        {
          users?.map(user => (
            <UsersCards
              key={user.id}
              user={user}
              deleteUsers={deleteUsers}
              setUserDate={setUserDate}
              handleOpenForm={handleOpenForm}
              setDeleteIsClose={setDeleteIsClose}
              setUserId={setUserId}
            />
          ))
        }
      </div>
      <div className='app__deletes'>
        <UserDelete
          deleteIsClose={deleteIsClose}
          setDeleteIsClose={setDeleteIsClose}
          deleteUsers={deleteUsers}
          userId={userId}
        />
      </div>
      <div>
        <UserSucces
          userSucces={userSucces}
          setUserSucces={setUserSucces}
        />
      </div>
      <div>
        <UserUpDate
          nameUpDate={nameUpDate}
          upDateClose={upDateClose}
          setUpDateClose={setUpDateClose}
        />
      </div>
    </div>
  )
}

export default App
