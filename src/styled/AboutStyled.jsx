import styled from 'styled-components';

const AboutStyle = styled.div`
    text-align: center;
    border: 1px solid black;
    background-color:black;
    display: flex;
    width: 1366px;
    height: 622px;
    


`;

const AboutImg = styled.img`
    width: 495px;
    height: 462px;
    margin: 80px 72px 80px;
    display: block;
    box-shadow: 0 0 10px rgba(0,0,0,0,0.6);
    object-fit: cover;
`;

const AboutTitle = styled.h1 `
color: white;
font-family: 'Roboto', sans-serif;
font-style: normal;
font-weight: bold;
font-size: 64px;
line-height: 80px;
margin-left:72px;
padding:0px;





`



export const AboutS =  AboutStyle
export const Img = AboutImg
export const Title = AboutTitle

