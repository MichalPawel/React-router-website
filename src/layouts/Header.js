import React from 'react';
import { Route, Switch } from 'react-router-dom';

import gruz1 from '../images/gruz1.jpg';
import gruz2 from '../images/gruz2.jpg';
import gruz3 from '../images/gruz3.jpg';
import gruz4 from '../images/gruz4.jpg';
import '../styles/Header.css';
const Header = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" render={() => (
                    <img src={gruz1} alt='gruz1' />
                )} />
                <Route path="/contact" render={() => (
                    <img src={gruz2} alt='gruz2' />
                )} />
                <Route path="/products" render={() => (
                    <img src={gruz3} alt='gruz3' />
                )} />
                <Route path="/admin" render={() => (
                    <img src={gruz4} alt='gruz4' />
                )} />
                <Route path="/" render={() => (
                    <img src={gruz1} alt='gruz1' />
                )} />
            </Switch>
        </>
    );
}

export default Header;