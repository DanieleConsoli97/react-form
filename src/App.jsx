import { useState } from 'react'
import './App.css'

function App() {
  const [posts, setPosts] = useState([])
  const [addPost, setAddPosts] = useState("")
  const handleAddPosts=(e)=>{
    setAddPosts(e.target.value)
    console.log(e)
    console.log(e.target.value)

  }
  const handleSub = (e)=>{
    e.preventDefault()
    setPosts(()=>[...posts,addPost])
  }
  return (
    <>
      <div>
        <form onSubmit={handleSub}>
          <input type="text" value={addPost} onChange={handleAddPosts} />
          <button>add Post</button>
        </form>
      
      </div>
      {
        posts.length > 0 ?(
          <ul>
            {
              posts.map((post,i)=>{
                return(
                <li key={i}>{post}</li>
              )
              })
            }
          </ul>
        ):(
          <h2>Nessun Post presente</h2>
        )
      }
    </>
  )
}

export default App
