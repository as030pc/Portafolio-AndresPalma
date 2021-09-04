import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styled/main.css'

import { BrowserRouter as Router, 
        Switch,
        Route,
} from 'react-router-dom'

import About from '../components/About'
import Contacto from '../components/Contacto'
import Projects from '../components/Projects'

import Testimonios from '../components/Testimonios'
import { App } from '../containers/App'

export default class AppRouter extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path = "/" component={App}/>
                        <Route path = "/about" component={About}/>
                        <Route path = "/projects" component={Projects}/>
                        <Route exact path = "/testimonios"  component={Testimonios}/>
                        <Route path = "/contacto" component={Contacto}/>
                        
                    </Switch>
                </Router>
            </div>
        )
    }
}
