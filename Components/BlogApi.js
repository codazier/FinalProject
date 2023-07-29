
import {useState, useEffect} from 'react';



function BlogApi() {
 
  const BLOG_ENDPOINT = "https://64bf23225ee688b6250d21a4.mockapi.io/blog/entries";

  const [blog, setBlog] = useState([{}])

  const [newHeadline, setNewHeadline] = useState('')
  const [newDate, setNewDate] =useState('')
  const [newEntry, setNewEntry] =useState('')
  
  const [updatedHeadline, setUpdatedHeadline] = useState('')
  const [updatedDate, setUpdatedDate] =useState('')
  const [updatedEntry, setUpdatedEntry] =useState('')

  function getBlog(){
    fetch(BLOG_ENDPOINT)
    .then(data => data.json())
    .then(data => setBlog(data))
  }

  useEffect(() => {
    getBlog()
    console.log(blog)
  },[])
  
  
  
  function deleteBlog(id){
    fetch(`${BLOG_ENDPOINT}/${id}`, {
      method: 'DELETE'
    }).then(() => getBlog())
  }
  

 
  
  function postNewBlog(e){
    e.preventDefault()

  

    fetch(BLOG_ENDPOINT, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        headline: newHeadline,
        date: newDate,
        entry: newEntry,
      })
    }).then(() => getBlog())
  }

  function updateBlog(e,blogObject){
    e.preventDefault()

    let updatedBlogObject = {
      ...blogObject,
      headline: updatedHeadline,
      date: updatedDate,
      entry: updatedEntry,
    }

    fetch(`${BLOG_ENDPOINT}/${blogObject.id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedBlogObject),
        headers: {
          "Content-Type": "application/json"
        }
    }).then(() => getBlog())
  }
  


  return (
    <div className="App">
    
    {blog.map((blog,index) => (
<div key={index}>
  <div>
    <br></br>
      Headline: {blog.headline} <br></br>
      Date: {blog.date}<br></br>
      Post: {blog.entry} <br></br>
      <br>
    </br>
    <button onClick={() => deleteBlog(blog.id)}>Delete</button>
  </div>
<br></br>
  <form>
  <p>Update</p>
  <label></label>
  <input onChange={(e) => setUpdatedHeadline(e.target.value)} placeholder="Headline"></input>
 
  
  <label></label>
  <input onChange={(e) => setUpdatedDate(e.target.value)} placeholder="Date"></input>

  <label></label>
  <input onChange={(e) => setUpdatedEntry(e.target.value)} placeholder="Post"></input>
  
  <br>
  </br><button onClick={(e) => updateBlog(e, blog)}>Submit</button>
</form>
</div>
    ))}

<br></br>
<br></br>
<form className="form-group">
  <h3>New Post</h3>
  
  <input onChange={(e) => setNewHeadline(e.target.value)} placeholder="Enter headline here"></input>
 
  
  
  <input onChange={(e) => setNewDate(e.target.value)} placeholder="Enter date here"></input>

<br></br>
  <label htmlFor="exampleFormControlTextarea1"></label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => setNewEntry(e.target.value)} placeholder="Enter post here"></textarea>
  

  
  <br>
  </br><button onClick={(e) => postNewBlog(e)}>Submit</button>
  
</form>
    </div>
    
  )
}


export default BlogApi


    
   
  