import React, { useEffect, useState } from 'react'
import BeatLoader from "react-spinners/BeatLoader";
import axios from 'axios'


//---------components-------
import Card from '../card/Card'
import Navbar from '../navbar/Navbar'


const Home = () => {
    // 
    const [user, setUser] = useState([])
    const [page,setPage] = useState(1)
    const [loader, setLoader] = useState(true)

    const fetchUser = () => {

        axios.get(`https://randomuser.me/api/?page=${page}&results=9&seed=abc`)

            .then((response) => {

                setUser((prev)=>[...prev,...response.data.results])
                setLoader(false)

            })
            .catch((er) => {
                console.log(er.message)
            })
    
        }

    const handleInfiniteScroll = async()=>{
        try {
           if ( window.innerHeight + document.documentElement.scrollTop +1 >=
             document.documentElement.scrollHeight
            ) 
             setPage((prev)=> prev+1)
            
        } catch (error) {
             
            console.log(error)
        }
    }

    useEffect(() => {

        setLoader(true)

        setTimeout(() => {
            fetchUser()
        }, 1000)

    }, [page])

   
    
    useEffect(()=>{
       
       window.addEventListener('scroll',handleInfiniteScroll)
       
      
       return ()=> window.removeEventListener('scroll',handleInfiniteScroll)

    },[])

      
    return (

        <div className='mb-3'>

            <Navbar />
            <Card users={user} />

            {
                loader &&
                <div className='flex justify-center mt-3'>
                    <BeatLoader size={10} color='#F2F7A1' />
                </div>
            }
             
         

        </div>
    )
}

export default Home