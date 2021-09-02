import React from 'react'
import styled from 'styled-components';
import About from '../components/About';
import  Projects from '../components/Projects';
import Testimonios  from '../components/Testimonios';
import Contacto from '../components/Contacto';
import {Navbar} from '../components/Navbar';



const DivGeneral = styled.div`
        font-family: 'Lato', sans-serif;
        margin: 0;
        padding: 0;
        display:block;
        width: 1366px;
`;


export const App = () => {
    return (
        <DivGeneral>
            <Navbar/>
            <About />
            <Projects></Projects>
            <Testimonios></Testimonios>
            <Contacto></Contacto>

        </DivGeneral>
    )
}