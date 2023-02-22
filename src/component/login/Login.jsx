

import React from 'react'
import Form from '../form/Form'
import LoginImage from '../form/LoginImage'

const Login = () => {
    return (

        <div className='h-[100vh] flex flex-col 
        justify-center items-center
        md:flex-row
        
        '>
            <Form />
            <LoginImage />

        </div>
    )
}

export default Login