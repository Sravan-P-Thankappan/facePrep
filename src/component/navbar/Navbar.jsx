import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../util/AuthContext'

const Navbar = () => {
    const {setLoggedIn} = useContext(UserContext)
    const navigate = useNavigate()

    const handleLogout = ()=>{

        setLoggedIn(false)   
        navigate('/')
    }



    return (
        <div className='bg-[#282A3A] px-3 py-2 
    flex justify-between sticky top-0 shadow-xl
    md:px-6
    '>
            <h1 className='text-[#F2F7A1] md:text-xl font-bold'>
                hire_Me
            </h1>

            <button className='bg-[#F2F7A1] px-1 py-1
        rounded-sm text-sm md:text-base md:px-2'
        onClick={handleLogout}
        >
                Logout
            </button>

        </div>
    )
}

export default Navbar