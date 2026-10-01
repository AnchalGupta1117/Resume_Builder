import { LayoutTemplate } from 'lucide-react'
import React from 'react'
import {Link} from 'react-router-dom'
import {ProfileInfoCard} from '../components/Cards';
import DarkModeToggle from './DarkModeToggle';



const Navbar = () => {
  return (
    <div className='h-16 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-purple-200/50 dark:border-purple-800/30 py-2.5 px-4 md:px-0 sticky top-0 z-50'>
        <div className='max-w-6xl mx-auto flex items-center justify-between gap-5'>
            <Link to='/' className='flex items-center gap-3'>
                <div className='flex items-center pb-6 gap-3'>
                    <div className='w-10 h-10 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-500 dark:via-pink-500 dark:to-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-300/50 dark:shadow-purple-500/30'>
                        <LayoutTemplate className='w-5 h-5 text-white'/>
                    </div>

                    <span className='text-xl sm:text-2xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent'>
                        ResumeXpert
                    </span>
                </div>            
            </Link>
            <div className='flex items-center gap-4'>
              <DarkModeToggle />
              <ProfileInfoCard/>
            </div>

        </div>

    </div>
  )
}

export default Navbar