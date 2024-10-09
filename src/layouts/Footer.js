import React from 'react';
import { Route, Switch } from 'react-router-dom'
import '../styles/Footer.css'
const Footer = () => {
    return (
        <div>
            <h2>Footer</h2>
            {/* <Switch>
                <Route path='/' exact render={() => {
                    return (
                        <div>You are on the <span>Home Page</span></div>
                    )
                }}></Route>
                <Route path='/:page' exact render={(props) => {
                    return (
                        <div>You are on a <span>{props.match.params.page}</span></div>
                    )
                }}></Route>
                <Route path='/:page/:idProduct' exact render={(props) => {
                    return (
                        <div>You are on a  <span>{props.match.url}</span></div>
                    )
                }}></Route>
            </Switch> */}
        </div>
    );
}

export default Footer;