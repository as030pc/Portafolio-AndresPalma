
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';

//referecia al componente About
import {App} from './containers/App';



ReactDOM.render(
    <AppRouter/>, //Lo que quiero mostrar
    document.getElementById('root') // y donde lo quiero mostrar
)