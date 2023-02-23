import React from 'react'
import CardItem from './CardItem'


const Card = ({ users }) => {



    return (
        <div>

            <div className='grid grid-cols-1 justify-items-center 
             gap-y-3 mt-5 
             sm:grid-cols-2 sm:mt-7
             md:grid-cols-3 md:gap-y-7 md:mt-10 md:w-11/12 mx-auto               
             '
            >
                    {
                        users.map((user, i) => {
                            return < CardItem user={user}
                                key={i}
                            />
                        })

                    }          
 
            </div>

        </div>
    )
}

export default Card