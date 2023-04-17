import React from 'react'
import { Link } from 'react-router-dom'
const Button = ({ name }) => {
    return (
        <div>
            <Link to={`/Filter?search_query=${name}`}>
                <button className={"py-1 px-2 rounded-lg bg-gray-100 mx-2 mb-2 hover:bg-gray-200 sm:py2 sm:px-4"}>
                    {name}
                </button>
            </Link>
        </div>
    )
}

export default Button
