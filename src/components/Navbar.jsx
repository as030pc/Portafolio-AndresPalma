import React from 'react'
import styled from 'styled-components'
import { Anchor, Logo } from '../styled/NavbarStyled'


const StyledNavbar = styled.div `
    background-color:black;
    padding:10px;
`
 export const Navbar = () => {
    return (
        <StyledNavbar>
            <Logo src = "https://res.cloudinary.com/dobboq5dt/image/upload/v1630621463/Portafolio%20Tarea/Logo_rtoehw.png"/>
            <Anchor href="https://developer.mozilla.org/es/docs/Learn/CSS/Styling_text/Styling_links">Hola</Anchor>
            <Anchor href="">Proyectos</Anchor>
            <Anchor href="">Testimonio</Anchor>
            <Anchor href="">Contactos</Anchor>  
        </StyledNavbar>
    )
}