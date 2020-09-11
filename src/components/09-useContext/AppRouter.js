import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,

} from "react-router-dom";
import { NavBar } from './NavBar';
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />
                {/* dependiendo de una condición se ejecurara lo que esté dentro del switch */}
                
                <div className="container">

                <Switch>
                    <Route exact path="/" component={HomeScreen} />
                    <Route exact path="/about" component={AboutScreen} />
                    <Route exact path="/login" component={LoginScreen} />

                    {/* <Route component={HomeScreen} /> tambien se puede usar por si se ingresó una ruta no definida */}
                    <Redirect to="/" />
                </Switch>
                </div>
                

            </div>
        </Router>
    )
}
