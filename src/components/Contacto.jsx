import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


 const Contacto = () => {
    return (
        <div id = "contacto">
            <h1>Contacto</h1>
            <p>Si está interesado en trabajar conmigo en su próximo proyecto, no dude en ponerse en contacto.</p>
            <form >

            <input placeholder = "Nombre" type="text" /> <br />
            <input type="email" placeholder = "email" /> <br />
            <textarea name="" placeholder = "Mensaje" id="" cols="30" rows="10"/> <br />
            <button> Enviar mensaje</button>

            </form>
            <div className = "imagen-footer"/>
            
        </div>
    )
}
export default Contacto;

