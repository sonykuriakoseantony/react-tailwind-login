import React from 'react'
import Login from './components/login'

const App = () => {
  return (
    <div className='App'>
      <div className='flex flex-col items-center p-12'>
        <h1 className='text-center text-3xl'>Simple Signup/Signin UI | React & TailwindCSS</h1>
        <Login />
      </div>
    </div>
  )
}

export default App