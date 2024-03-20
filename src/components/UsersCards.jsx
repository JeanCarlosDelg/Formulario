import React from "react";
import './styles/UsersCards.css'

const UsersCards = ({ user, setUserDate, handleOpenForm, setDeleteIsClose, setUserId }) => {

  const handleDelete = () => {
    setDeleteIsClose(false)
    setUserId(user)
  };

  const handleUpDate = () => {
    setUserDate(user);
    handleOpenForm()
  };

  return (
    <article className="card">
      <h2 className="card__name">{`${user.first_name} ${user.last_name}`}</h2>
      <hr className="card__hr" />
      <ul className="card__list">
        <li className="card__item">
          <span className="card__label">Email</span>
          <span className="card__value">{user.email}</span>
        </li>
        <li className="card__item">
          <span className="card__label">Birthday</span>
          <span className="card__value"><img className="img__gift" src="/gift.svg" alt="" /> {user.birthday}</span>
        </li>
      </ul>
      <div className="card__container-btn">
        <button className="card__btn" onClick=
          {handleDelete}><img className="img__delete" src="/delete.svg" alt="" />Delete</button>
        <button className="card__btn" onClick={handleUpDate}><img className="img__edit" src="/edit.svg" alt="" />Edit</button>
      </div>
    </article>
  );
};

export default UsersCards;
