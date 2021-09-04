
import React, { Component } from 'react'

const Project = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.descripcion}</p>
            <img src={props.image} alt="" /> <br />
            <a href={props.linkproyecto}><button> Ver Proyecto Completo</button></a>  <br />
            <a href={props.linkproyecto}><button>Ver codigo</button></a>
        </div>
    )
}
export default class Projects extends Component {

    render() {
        return (

            <div id="projects" >
                <h1>El gran mundo de las soluciones tecnologicas, todo en un ambiente de lógica </h1>
                <h2>En mi recorrido como desarrollado Front-End Junior he logrado desarrollar algunos proyectos en donde he desbordado mi creatividad e ingenio</h2>
                <Project image = "https://res.cloudinary.com/dobboq5dt/image/upload/v1630728382/Portafolio%20Tarea/imc_jklh2a.png" className = "projecto1" title="Calculadora IMC " descripcion=" Este proyecto tiene la finalidad de calcular el IMC de una persona teniendo en cuenta su peso y estatura, devuelve a la persona su estado de salud y el calculo del IMC" />
                <div className="parteAbajo">
                    <Project image = "https://res.cloudinary.com/dobboq5dt/image/upload/v1630726502/Portafolio%20Tarea/principefresco_eepcne.png" className = "projecto2" title="Principe Fresco " descripcion="Es una pagina e-commerce de ropa deportiva que permite realizar el registro de compra en un formulario. Adicionalmente tiene un carrito de compra" />
                    <Project image = "https://res.cloudinary.com/dobboq5dt/image/upload/v1630728385/Portafolio%20Tarea/netnet_vq4el8.png "className = "projecto3" title="Pagina Net Net" descripcion=" Es una pagina de peliculas que permite revisar la descripcion de algunas peliculas y realizar un registro en la plataforma" />
                </div>
                
            </div>
        )
    }
}



