import React from 'react';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeacherItem(){
  return(
    <article className="teacher-item">
         <header>
          
           <img src="https://avatars1.githubusercontent.com/u/47507696?s=460&u=6fa1d4b3bff60d6ff6b44c4c284e97a42ae976d0&v=4" alt="Luciano"></img>

           <div>
           <strong>Luciano Brandão</strong>
           <span>Quimica</span>
           </div>
           
         </header>

         <p>
           Texto aqui
           <br/><br/>
           Continuação aqui
         </p>

         <footer>
           <p>
             Preço/hora
            <strong>R$ 80.00</strong>
          </p>
          <button type="button">
            <img src={whatsAppIcon} alt="whatsapp"/>
            Entrar em contato
          </button>
         </footer>
       </article>
  );
}

export default TeacherItem;