import React, { useState } from 'react'

export default function Card({user, userEdit, userList, setUserList}) {

    // Contador de likes
    const handleLikes = (nickname) => {
        const updatedUser = [...userList].map((user) => {
          if(user.nickname == nickname) {
            user.likes += 1
          }
          return user
        })
        setUserList(updatedUser)
    }

    // Edita um user
    const handleEdit = () => {
      return null
    }

  return (
    <li className='card col bg-dark text-bg-dark'>
      <div className="card-body" key={user.nickname}>
        <p className="card-text">Nickname: {user.nickname}</p>
        <p className="card-text">Age: {user.age}</p>
        <p className="card-text">E-mail: {user.email}</p>
        <p className="card-text">Password: {user.senha}</p>
      </div>
      <div className="card-footer d-flex justify-content-between">
        <div>
            <button onClick={() => handleLikes(user.nickname)} className='btn btn-outline-primary'>ok</button>
            <span className='ms-2'>{user.likes} likes</span>
        </div>
            <button className='btn btn-warning' onClick={handleEdit}>Editar</button>
      </div>
    </li>
  )
}