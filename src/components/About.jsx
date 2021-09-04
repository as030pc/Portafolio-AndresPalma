
import React from 'react';
import styled from 'styled-components';

import {AboutS,Img, Title} from  '../styled/AboutStyled'

const Block = styled.div`
    display:block;
    margin-top:80px;
    text-align: justify;
    
`
const About = () => {
    return(
        <AboutS id = "hola">
             <Block>
                <Title> Hola a Todos </Title>
                <Title> Soy Andres Palma </Title>
             </Block>
            
            <Img src="https://res.cloudinary.com/dobboq5dt/image/upload/v1630528325/Portafolio%20Tarea/Andres_Steven_Palma_Casta%C3%B1eda_IngenieriaBioquimica_epbls1.jpg" alt="Andres Palma"/>    
            
        </AboutS>
        
       
    )

}

export default About;