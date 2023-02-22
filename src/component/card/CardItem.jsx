import React from 'react'

const CardItem = ({user}) => {

    console.log('inside item ',user)
    return (

        <div className='bg-[#282A3A] w-64 py-10 flex  shadow-md
                flex-col items-center gap-3 rounded-sm cursor-pointer
                hover:scale-110 duration-700
                '>

            <div className='bg-blue-800 h-16 w-3/12  
                    rounded-full'>
                <img className='object-cover 
                rounded-full h-16 w-full'
                    src={user.picture.thumbnail}
                    alt="" />
            </div>

            <div className='flex flex-col items-center gap-2'>
                <p className='text-slate-300 
                text-sm font-thin'>
                    Hey I'm
                    </p>
                <p className='text-white text-lg'>
                    {user.name.first} {user.name.last}
                    </p>
                <button className='bg-[#F2F7A1] py-1 
                    px-4 rounded-sm '>
                    Connect
                </button>
            </div>


        </div>
    )
}

export default CardItem