import React from 'react'
import { Link } from 'react-router'
import { PlusIcon } from 'lucide-react'
import 'boxicons/css/boxicons.min.css';

const Navbar = () => {
    return (
        <header className='border-b bg-base-100 border-base-content/10'>
            <div className='mx-auto max-w-6xl px-4 py-4 flex items-center justify-between'>
                <div className="text-3xl text-base-content drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] tracking-tighter"
                    style={{ fontFamily: 'Poppins' }} >
                    <h1> NoteFlow <i className="bx bxs-pencil bx-rotate-270" /></h1>
                </div>
                <div className="createNote">
                    <button className='px-2 bg-base-100 text-base-content  rounded-lg hover:drop-shadow-[0_0_2px_rgba(255,255,255,0.8)] h-8 w-40'>
                        <Link to={"/create"} className='flex gap-1 text-xl'>
                            <PlusIcon className='size-6 items-center pt-1 text-2xl' /> Create Note
                        </Link>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Navbar
