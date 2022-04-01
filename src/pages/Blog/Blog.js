import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"

function BlogList(){
    const negavigate =useNavigate()
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        (async ()=>{
            let res = await fetch("/posts.json");
            setPosts(await res.json())
        })()
    },[])
 

    const handleClick =(id)=>{
        const post = posts[id-1];
        Navigate(`/blog/${post.slug}`, {state: {post}})
    }
    return(
        <div>
        <div>
        {
            posts.map((post)=>(
                <div key={post.id} 
                style={{display: "flex", margin: "20p 0"}}>
                <img src={`/images/${post.image}`}
                alt = "" height={200} width={200}/>
                
                <div>
                <h3>{post.title}</h3>
                <p>{post.extract}</p>
                <button className="btn-contain" 
                onClick={()=>handleClick(post.id)}
                style={{alignSelf: "end"}}>Read More</button>
                </div>
                </div>
            ))}
        </div>
        </div>
    )
}
export default BlogList;
