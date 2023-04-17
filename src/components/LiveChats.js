import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage.js'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice.js'
import { randomNameGenerate, generateRandomMessage } from '../utils/helper.js'

const LiveChats = () => {
    const [liveMessage, setLiveMessage] = useState("")
    const dispatch = useDispatch()
    const chatMessages = useSelector((Store) => Store.chat.messages)
    const [isLiveMessageVisible, setIsLiveMessageVisible] = useState(true);

    useEffect(() => {

        const timer = setInterval(() => {
            // API POLLING
            dispatch(addMessage({
                name: randomNameGenerate(),
                message: generateRandomMessage(),
            }))
            console.log("api polling");
        }, 1500)
        return () => clearInterval(timer)
    }, [])

    const handleChatDisplay = () => {
        setIsLiveMessageVisible(!isLiveMessageVisible);
    };
    return (
        <>
            {isLiveMessageVisible ? (
                <div>
                    <div className=' border-2 border-gray-600 shadow-lg h-96 flex flex-col-reverse bg-slate-100 rounded-lg  w-full overflow-y-scroll '>
                        {
                            chatMessages.map((chats, index) => (
                                <ChatMessage key={index} name={chats.name} message={chats.message} />
                            ))
                        }
                    </div>
                    <form className='w-full' onSubmit={(e) => {
                        e.preventDefault()
                        console.log("summmeted", liveMessage);
                        dispatch(addMessage({
                            name: "Mohan",
                            message: liveMessage
                        }))
                        setLiveMessage("")
                    }}>
                        <div className='w-full flex  justify-around'>
                            <input value={liveMessage} onChange={(e) => setLiveMessage(e.target.value)} className='px-4 py-2 h-10 rounded-lg m-4 w-[60%]  border-2 border-gray-800 ' type='text' placeholder='say something ...' />
                            <button className='bg-green-700 px-4 w-[30%] text-white py-2 m-4 rounded-xl'>Send</button>
                        </div>
                    </form>

                    <button
                        className="block  bg-slate-500 w-full rounded-full font-bold text-sm border-t-[1px] border-t-gray-200 py-3 hover:bg-gray-600 hover:border-gray-100"
                        onClick={() => handleChatDisplay()}
                    >
                        Hide chat
                    </button>
                </div>
            ) : (
                <button
                    className="border bg-slate-500 border-gray-200 block w-full rounded-full font-bold text-sm py-2 hover:bg-gray-600 hover:border-gray-100"
                    onClick={() => handleChatDisplay()}
                >
                    Show chat
                </button>
            )}

        </>
    )
}

export default LiveChats
