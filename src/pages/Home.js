import React from 'react'
import withLayout from './withLayout'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  return (
    <div>
    <div className='banner'>
    <h1>Welcome To My Webpage</h1>
    <p>Web programming is a simple but difficult learning course, its stress is out of control, 
    especially this something they called react in coding.</p>
    <div className='actions-wrap'>
    <button className='btn-outline' onClick={()=>navigate("./about")}>About Me</button>
    <button className='btn-contain' onClick={()=>navigate("./blog")}>Read Blogs</button>

    </div>
    </div>
    </div>
  )
}

export default withLayout(Home)