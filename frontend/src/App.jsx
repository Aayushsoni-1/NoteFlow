import React from 'react'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'
import {Route,Routes} from 'react-router'
import {Toaster,toast} from 'react-hot-toast'

const App = () => {

  return (
    <div data-theme = ''>
      <div className="relative h-full w-full">
      <Routes>
        <Route path='/' element = { <HomePage /> }>
        </Route>
        <Route path='/create' element = { <CreatePage /> }></Route>
        <Route path='/note/:id' element = { <NoteDetailPage /> }></Route>
      </Routes>
      </div>
    </div> 
    
    
  )
}

export default App