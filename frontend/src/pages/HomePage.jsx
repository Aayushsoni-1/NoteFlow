import { React, useState, useEffect } from 'react'
import Navbar from '../Components/Navbar.jsx'
import RateLimitedUI from '../Components/RateLimitUI.jsx'
import NoteCard from '../Components/NoteCard.jsx'
import axios from 'axios'
import toast from 'react-hot-toast'
import api from '../lib/axios'
import NotesNotFound from '../Components/NotesNotFound.jsx'

const HomePage = () => {
  const [isRateLimit, setisRateLimit] = useState(false)
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("useEffect is Triggered");

    const fetchNotes = async () => {
      try {
        const res = await api.get('/notes');
        console.log(res.data);
        setNotes(res.data);
        setisRateLimit(false);
      } catch (error) {
        console.log("Error in fetching the notes from server", error);
        if (error.response?.status === 429) {
          setisRateLimit(true);
        } else {
          toast.error("Failed to get your notes!");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className='min-h-screen'>
      <Navbar />
      {/* //This line tells that if it's isRateLimit then load these component */}
      {isRateLimit && <RateLimitedUI />}

      <div className='max-w-7xl mx-auto p-4 mt-6'>
        {loading && !isRateLimit && <div className="text-center text-2xl text-primary py-10"> Loading all your notes....</div>}

        {notes.length ===0 && !isRateLimit && <NotesNotFound />}

        {notes.length > 0 && !isRateLimit && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {notes.map((note) => {
              return (
                <NoteCard key={note._id} note={note} setNotes = {setNotes}/>
                );
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage

/*
// The working of RateLimit UI

We’ve implemented rate limiting in the backend using Upstash. When the number of requests exceeds the allowed limit (e.g., 10 per 20 seconds), the server responds with a `429 Too Many Requests` status.

On the frontend, we use a state variable `isRateLimit` (default `false`) to track if the rate limit has been hit. Inside `useEffect`, we fetch notes using Axios. If the request is successful, we log the data and update the `notes` state.

If the request fails, the `catch` block checks if the error status is `429`. If so, we set `isRateLimit` to `true`. This triggers conditional rendering:


{isRateLimit && <RateLimitedUI />}


So, when the limit is hit, the user sees a custom UI indicating they need to wait. This keeps both backend and frontend in sync and user-aware.

*/

