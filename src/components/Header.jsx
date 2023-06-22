import { useState } from "react";
import '../styles/header.css';


function Header() {

    const [name, setName] = useState('Clique aqui')
    function mudarNome() {
        let novoNome = prompt('Insira seu nome')
        if(novoNome){
            setName(novoNome)
        }else{
            setName('Clique aqui')
        }
    }
        
    return ( 
        <header className="container container-header">
        <div className="row">

           <nav className="navbar navbar-light bg-light text-center rounded">
               <a className="navbar-brand" href="#" onClick={mudarNome}>               
                   {name}
               </a>
           </nav>

       </div>
       </header>
     );
}

export default Header ;