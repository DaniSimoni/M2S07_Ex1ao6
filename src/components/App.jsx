import { React, useRef, useState } from 'react'
import '../styles/App.css'
import Form from './Form'
import Header from './Header'
import Card from './Card'

function App() {
  const [userList, setUserList] = useState([
    {
      nickname: "teste",
      age: 23,
      email: "teste@teste",
      senha: "123",
      likes: 0
    },
  ])
  const [filter, setFilter] = useState(userList)
  const userFindRef = useRef()

  function userEdit(id) {
    const userForEdit = userList.map((user) => user.nickname === id)
    console.log(userForEdit)
  }

  function handleFilter(e) {
    // console.log(e.target.value)
    const nickname = userFindRef.current.value
    const filtered = userList.filter((user) => user.nickname.includes(nickname))
    setFilter(filtered)
    console.log(userList)
  } 

  return (
    <section className='container container-header'>
    <div className='row'>
    <Header className='header col-12' />
    </div>

		<div className="app bg-dark">
		<div className="row text-bg-dark container-Form">
				<Form userList={userList} setUserList={setUserList} />
				
        <input
					type="text"
					placeholder="Busque pelo Nickname"
					className="row mt-3 form-control col-2 "
					ref={userFindRef}
          onChange={handleFilter}
				/>


				<ul className="row gap-0 row-gap-2 p-4">
					{filter.map((user) => {
						return (
							
              <Card 
								user={user}
								userList={userList}
								setUserList={setUserList}
								userEdit={userEdit}
							/>
						);
					})}
				</ul>


			</div>
		</div>
    </section>
  )
};

export default App