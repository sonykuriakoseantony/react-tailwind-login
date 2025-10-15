import React, { use, useState } from 'react'

const login = () => {

    const [isLogedIn, setLogedIn] = useState(true)
    return (
        <div className='flex flex-col shadow-lg mt-5 p-8 rounded-xl'>
            {/* Header of form */}
            <div className='text-center mb-5'>
                <h1 className='text-2xl font-semibold'>
                    {isLogedIn ? "Login" : "Signup"}
                </h1>
            </div>
            {/* Form Tab*/}
            <div className='flex gap-2 justify-between rounded-3xl border border-gray-400'>
                <button onClick={() => setLogedIn(true)} className={isLogedIn ? 'bg-gradient-to-r from-blue-300 via-blue-600 to-indigo-600 rounded-3xl p-3 text-white cursor-pointer shadow-md font-semibold w-50' : 'font-semibold w-50 cursor-pointer'}>Login</button>
                <button onClick={() => setLogedIn(false)} className={isLogedIn ? 'font-semibold w-50 cursor-pointer' : 'bg-gradient-to-r from-blue-300 via-blue-600 to-indigo-600 rounded-3xl p-3 text-white cursor-pointer shadow-md font-semibold w-50'}>Signup</button>
            </div>
            <form action="" className='flex flex-col w-100 my-5'>
                {!isLogedIn && (
                    <input className='border border-gray-400 rounded mb-5 h-[40px] px-2' type="text" placeholder='Name'/>
                )}

                {/* Shared fields */}
                <input className='border border-gray-400 rounded mb-5 h-[40px] px-2' type="text" placeholder='Email address'/>
                <input type="password" placeholder='Enter password' className='border border-gray-400 rounded mb-5 h-[40px] px-2'/>

                {/* Signup form fields */}
                {!isLogedIn && (<input type="password" placeholder='Confirm password' className='border border-gray-400 rounded mb-5 h-[40px] px-2'/>)}
                
                {isLogedIn &&(
                    <div className='text-right'>
                        <a href="#" className='text-cyan-600 hover:underline'>Forgot password?</a>
                    </div>
                )}

                {/* Shared fields */}
                <button className='w-full my-3 m-auto bg-gradient-to-r from-blue-300 via-blue-600 to-indigo-600 rounded-3xl p-3 text-white font-semibold w-50 cursor-pointer shadow-md transition hover:opacity-90'>{isLogedIn ? "Login" : "Signup"}</button>
                
            </form>
            <p>{!isLogedIn ? 'Already have an account? ' : `Don't have an account? `}<a className='text-cyan-600 hover:underline' href="#" onClick={(e)=>setLogedIn(!isLogedIn)}>{!isLogedIn ? "Login" : "Sigunp"}</a></p>
        </div>
    )
}

export default login