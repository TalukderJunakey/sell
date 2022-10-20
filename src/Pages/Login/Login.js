import React from 'react';

const Login = () => {
    return (
        <div className='align-items-center'>
            <div>
                <h3 className='text-3xl text-center'>Login</h3>
            </div>
            <br />

            <div>
                <button className='btn btn-primary w-25 d-block mx-auto my-2'>Google Sign In</button>
            </div>
            <div>
                <button className='btn btn-primary w-25 d-block mx-auto my-2'>Facebook</button>
            </div>
            <div>
                <button className='btn btn-primary w-25 d-block mx-auto my-2'>GitHub</button>
            </div>
        </div>
    );
};

export default Login;