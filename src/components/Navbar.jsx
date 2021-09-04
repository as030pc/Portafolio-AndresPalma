import React from 'react'
import styled from 'styled-components'
import { Anchor, Logo } from '../styled/NavbarStyled'
import { Link } from 'react-router-dom'


 

const StyledNavbar = styled.div `
    background-color:black;
    padding:10px;
`
 export const Navbar = () => {
    return (
        <StyledNavbar>
            <Logo src = "https://res.cloudinary.com/dobboq5dt/image/upload/v1630621463/Portafolio%20Tarea/Logo_rtoehw.png"/>
            <Anchor href="#hola"> Hola </Anchor>
            <Anchor href="#projects"> Proyectos </Anchor>
            <Anchor href="#testimonios"> Testimonios </Anchor>
            <Anchor href="#contacto"> Contacto </Anchor>

            {/* <Link to = "/projects" className ="link">Proyectos</Link>
            <Link to = "/testimonios" className ="link"> Testimonios </Link>
            <Link to = "/" className ="link"><Anchor > Contacto </Anchor></Link> */}
            
        </StyledNavbar>
    )
}