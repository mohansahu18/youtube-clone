import React from 'react'
import ButtonList from './ButtonList'
import Result from './Result'

const FilterPage = () => {
    return (
        <div className='flex flex-wrap  w-[87%] sm:w-4/5'>
            <ButtonList />
            <Result />
        </div>
    )
}

export default FilterPage
