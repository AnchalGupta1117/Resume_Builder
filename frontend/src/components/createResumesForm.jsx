import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../utils/axiosInstance'
import { API_PATHS } from '../utils/apiPaths'

const CreateResumesForm = () => {
  const [title, setTitle] = useState("")
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleCreateResume = async (e) => {
    e.preventDefault();

    if (!title) {
      setError("Please enter resume title")
      return
    }
    setError("")

    try {
      const response = await axiosInstance.post(API_PATHS.RESUME.CREATE, { title })
      if (response.data?._id) {
        navigate(`/resume/${response.data._id}`)
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Something went wrong. Please try again later')
    }
  }

  return (
    <div className='w-full max-w-md mx-auto p-8 bg-white rounded-2xl border border-gray-100 shadow-lg'>
      <h3 className='text-2xl font-bold text-gray-900 mb-2 text-center'>Create New Resume</h3>
      <p className='text-gray-600 mb-6 text-center'>
        Give your resume a title to get started. You can customize everything later.
      </p>
      
      <form onSubmit={handleCreateResume} className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label className='mb-1 text-sm font-medium text-gray-700'>Resume Title</label>
          <input 
            value={title} 
            onChange={({ target }) => setTitle(target.value)}
            placeholder='e.g., John Doe - Software Engineer'
            type='text'
            className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500'
          />
        </div>

        {error && <p className='text-red-500 text-sm'>{error}</p>}

        <button 
          type='submit' 
          className='w-full py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold rounded-2xl hover:scale-105 hover:shadow-xl transition-all'
        >
          Create Resume
        </button>
      </form>
    </div>
  )
}

export default CreateResumesForm















// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import axiosInstance from '../utils/axiosInstance'
// import { API_PATHS } from '../utils/apiPaths'
// const CreateResumesForm = () => {
//   const [title,setTitle]=useState("")
//   const[error,setError]=useState(null)
//   const navigate=useNavigate()
//   const handleCreateResume=async(e)=>{
//     e.preventDefault();

//     if(!title){
//       setError("Please enter resume title")
//       return
//     }
//     setError("")
//     try{
//       const response=await axiosInstance.post(API_PATHS.RESUME.CREATE,{
//         title,
//       })
//       if(response.data?._id){
//         navigate(`/resume/${response.data?._id}`)
//       }
//     }
//     catch(error){
//       if(error.response && error.response.data.message){
//         setError(error.response.data.message)
//       }
//       else{
//         setError('Something went wrong.Please try again later')
//       }
//     }
    
//   }

//   return (
//     <div className='w-full max-w-md p-8 bg-white rounded-2xl border border-gray-100 shadow-lg'>
//       <h3 className='text-2xl font-bold text-gray-900 mb-2'>Create New Resume</h3>
//       <p className='text-gray-600 mb-8'>
//         Give your resume a title to get started.You can customize everything later.
//       </p>
      
//       <form onSubmit={handleCreateResume}>
//         <label className='block mb-2 text-sm font-medium text-gray-700'>Resume Title</label>
//         <input value={title} onChange={({target}) => setTitle(target.value)}
//         label='Resume Title' placeholder='e.g., John Doe-Software Engineer'
//         type='text'/>

//         {error && <p className='text-red-500 text-sm mb-4'>{error}</p>}

//         <button type='submit' className='w-full py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-black rounded-2xl hover:scale-105 hover:scale-105 hover:shadow-xl hover:shadow-rose-200 transition-all' >
//           Create Resume
//         </button>
//       </form>

//     </div>
//   )
// }

// export default CreateResumesForm
