import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import Navbar from '../components/Navbar';


const DashboardLayout = ({activeMenu,children}) => {
    const {user, loading}=useContext(UserContext);
    if (loading) return <p className="text-center mt-8">Loading...</p>;
    if (!user) return <p className="text-center mt-8">Please log in</p>;
  return (
    <div>
        <Navbar activeMenu={activeMenu}/>
        {user && <div className='container mx-auto pt-4 pb-4'>{children}</div>}
    </div>
  )
}

export default DashboardLayout