import React, { useState,useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../../util/AuthContext';

const username = 'user'
const password = '1234'

const Form = () => {

    const {setLoggedIn,loggedIn} = useContext(UserContext)
    const navigate = useNavigate()
    const [userInput,setUserInput] = useState({
        userId:'',
        pswd:''
    })
    
    const handleUserName = (e)=>{
         
        setUserInput((prev)=>{
             return {...prev,userId:e.target.value}
        })
    }

    const handlePassword = (e)=>{
        setUserInput((prev)=>{
            return {...prev,pswd:e.target.value}
       })
    }

    const handleLogin = (e)=>{

      e.preventDefault()
      if(userInput.userId===username&&userInput.pswd===password)

      {
        setLoggedIn(true)
        navigate('/home',{replace:true})
      }

     else toast.error('Invalid Username or Password',{
        position:'top-center',
       
     })

    }
     
    useEffect(()=>{
        if(loggedIn) navigate('/home')
        else navigate('/')
    },[])

    return (

        <div className='bg-[#282A3A] w-10/12 
            px-2 py-8 rounded-sm
            sm:w-8/12 sm:px-6 sm:py-14 
            md:w-3/12 md:py-20
            '>

            <form onSubmit={handleLogin} className='flex  flex-col gap-5 sm:gap-8 md:gap-10'>

                <input className='p-1 bg-[#6B728E] text-slate-50 
                rounded-sm outline-none'
                    placeholder='Username'
                    type="text"
                    onChange={handleUserName}
                    />

                <input className='p-1 bg-[#6B728E] text-slate-50 
                rounded-sm outline-none'
                    placeholder='Password'
                    type="password"
                    onChange={handlePassword}
                    />

                <button className='bg-[#F2F7A1] py-1 font-bold  
                rounded-sm'>
                    Login
                </button>
            </form>

            <ToastContainer/>

        </div>
    )
}

export default Form