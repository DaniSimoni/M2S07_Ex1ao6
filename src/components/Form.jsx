import Input from './Input';
import React from 'react';


function Form({botao, age, email, senha}) {

    function formValidation() {
        console.log('formValidation()')
        const nickname = document.myForm.nickname
        const age = document.myForm.age
        const email = document.myForm.email
        const senha = document.myForm.senha
      
        if(!nickname.value) return setErrorFor(nickname, "Nickname cannot be empty")
        if(!age.value) return setErrorFor(age, "age cannot be empty")
        if(!email.value) return setErrorFor(email, "email cannot be empty")
        if(!senha.value) return setErrorFor(senha, "senha cannot be empty")
      
        // console.log(nickname.value, age.value, email.value, senha.value)
        return {
                nickname: nickname.value,
                age: age.value,
                email: email.value,
                senha: senha.value,
                likes: 0
              }
      }
      
      function setErrorFor(input, errorMsg) {
        const fieldset = input.parentElement
        const small = fieldset.querySelector('small')
      
        small.removeAttribute('class')
        small.innerText = errorMsg
      }
    
      function register(e) {
        e.preventDefault()
        try {
          const {nickname, age, email, senha} = formValidation()
          const newUser = {nickname, age, email, senha}
          // console.log(newUser)
          if(userList.some(user => user.nickname === nickname)) return console.error("Nickname já existe.")      
          setUserList([...userList, newUser])
        } catch (error) {
          console.log(error.message)      
        }
      }

    return ( 
    

        <form className="container" name='myForm' onSubmit={register}>
           
            <div className="form-group mb-2 ">
                <Input id='nickname' tipo="nickname" texto={botao} legenda="Digite seu Nickname"/>
            </div>

            <div className="form-group mb-2">  
                <Input tipo="age" texto={age} legenda="Digite sua idade"/>
            </div>

            <div className="form-group mb-2">  
                <Input tipo="email" texto={email} legenda="Digite seu email"/>
            </div>

            <div className="form-group mb-2">  
                <Input tipo="senha" texto={senha} legenda="Digite sua senha"/>
            </div>

            <div className="form-group mb-2">  
                <button type='submit' className='btn btn-outline-success'>Enviar</button>
            </div>

        
        </form>
        

     )

    }
  


export default Form ;