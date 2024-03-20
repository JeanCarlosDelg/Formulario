import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import './styles/FormUser.css'

const FormUser = ({ createUsers, userDate, upDateUsers, setUserDate, formIsClose, setFormIsClose, setUserSucces, setNameUpDate, setUpDateClose }) => {

  const { handleSubmit, register, reset } = useForm()

  useEffect(() => {
    reset(userDate)
  }, [userDate])


  const submit = (data) => {
    if (userDate) {
      upDateUsers('/users/', userDate.id, data)
      setUserDate()
      setNameUpDate(`${userDate.first_name} ${userDate.last_name}`)
      setUpDateClose(false)
    } else {
      createUsers('/users/', data)
      setUserSucces(false)
    }
    setFormIsClose(true)
    reset({
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      birthday: ''
    })
  }

  const handleFormClose = () => {
    setFormIsClose(true)
    reset({
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      birthday: ''
    })
    setUserDate()
  }

  return (
    <div className={`form-container ${formIsClose && 'form__close'}`}>
      <form className="form" onSubmit={handleSubmit(submit)}>
      <header className="form__header">
        <h2 className="form__title">User Form</h2>
        <div onClick={handleFormClose} className="form__exit">x</div>
      </header>
        <label className="form__label" htmlFor="">
          <span className="form__field">Email</span>
          <input required className="form__input" {...register('email')} type="email" />
        </label>
        <label className="form__label" htmlFor="">
          <span className="form__field">Password</span>
          <input required className="form__input" {...register('password')} type="password" />
        </label>
        <label className="form__label" htmlFor="">
          <span className="form__field">First Name</span>
          <input required className="form__input" {...register('first_name')} type="text" />
        </label>
        <label className="form__label" htmlFor="">
          <span className="form__field">Last Name</span>
          <input required className="form__input" {...register('last_name')} type="text" />
        </label>
        <label className="form__label" htmlFor="">
          <span className="form__field">Birthday</span>
          <input className="form__field__value" {...register('birthday')} type="date" />
        </label>
        <button className="form__btn">Submit</button>
      </form>
    </div>
  );
};

export default FormUser;
