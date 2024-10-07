import React from 'react';
import { Route, Redirect } from 'react-router-dom'
let permission = false;
const AdminPage = () => {
    return (
        <Route render={() => (
            permission ? (<h3>Admin Panel - Hello</h3>) : (
                <Redirect to='/login' />
            ))} />
    );
}

export default AdminPage;