import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router'
import { ArrowLeftIcon } from 'lucide-react'
import {Toaster,toast} from 'react-hot-toast'
import axios from 'axios'
import api from '../lib/axios';

const CreatePage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    // if(!title.trim() || !content.trim()){
    //   toast.error("All fields are required");
    //   return;
    // }
    // setLoading(true);

    try {
        await api.post("/notes",{
          title,
          content 
        })
        toast.success("Note is Created Successfully!")
        navigate("/")
      
    } catch (error) {
        console.log(error)
        if(error.response.status === 429) {
          toast.error("Slow Down! You are creating notes too fast",
            {
              duration:5000,
              icon:"✋🏻"
            }
          )
        }
        else{

          toast.error("Failed to create a Note")
        }
    }
    finally{
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-base-300 text-base-content">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto rounded-lg">
          <Link to={'/'} className="btn btn-ghost gap-2">
            <ArrowLeftIcon className="size-5" />
            Back to Notes
          </Link>

          <div className="card bg-base-100 ">
            <div className="card-body">
              <h2 className='card-title text-2xl mb-4'>Create New Note</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-control mb-4 ">
                  <label className="label">
                    <span className = 'label-text' >Title: </span>
                  </label>
                  <br />
                  <input 
                  type="text" 
                  placeholder='Note Title' 
                  className = 'input input-bordered w-full mt-4' 
                  value={title}
                  onChange = {(e) => setTitle(e.target.value)}
                  />
                  </div>

                  <div className="form-control mb-4">
                  <label className="label">
                    <span className = 'label-text'>Content: </span>
                  </label>
                  <br />
                  <textarea 
                  type="text" 
                  placeholder='Write your note here ' 
                  className = 'textarea textarea-bordered w-full mt-4 h-40' 
                  value={content}
                  onChange = {(e) => setContent(e.target.value)}
                  />
                </div>

                <div className="card-action justify-end">
                  <button type='submit' className = 'btn btn-info' disabled = {loading}>
                    {loading ? "Creating...": "Create Note"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePage













// ⚠️ Not Recommended in React:
// <form action="submit" onSubmit={handleSubmit} className=''></form>
// action="submit" tries to send the form data to a URL called submit (like /submit route) via a default HTML form behavior, which reloads the page.