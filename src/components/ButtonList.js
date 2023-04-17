import { Link } from 'react-router-dom'
import React from 'react'
import Button from './Button'
const ButtonList = () => {
    const list = ["All", "CSS", "Game", "JavaScript", "Live", "React Js", "Shri Ram", "Music", "HTML", "News", "Mantras", "Science", "Motivation", "Android", "cryptocurrency", "travelling", "Dance"]
    return (
        <div className="  w-full  overflow-x-scroll  bg-white flex text-sm  ">

            <Link to='/'>
                <button className={"py-1 px-2 rounded-lg bg-gray-100 mx-2 mb-2 hover:bg-gray-200 sm:py2 sm:px-4"}>explore</button>
            </Link>

            {
                list.map((e, index) => { return <Button key={index} name={e} />; })
            }
        </div>
    )
}
export default ButtonList
