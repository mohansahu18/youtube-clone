import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
const MainContainer = () => {
    return (
        <div className='flex flex-wrap  w-[87%] sm:w-4/5  '>
            <ButtonList className="w-full  " />
            < VideoContainer />
        </div>
    )
}

export default MainContainer
