import React from 'react';

const LoginPage = () => {
    return (
        <div>
            <label>Login/Email: <input type="text" /></label> <br />
            <label htmlFor="">Password: <input type="text" /></label>
            <button>Login</button>
        </div>
    );
}

export default LoginPage;