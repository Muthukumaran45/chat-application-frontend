import React, { useState } from 'react'

// icons
import { X } from 'lucide-react';

// file
import uploadFile from '../helpers/uploadFile';

// package
import axios from 'axios';
import { Link } from 'react-router-dom';


function RegiesterPage() {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        profile_pic: "",
    })
    const [uploadPhoto, setUploadPhoto] = useState("")

    const handleOnChange = (e) => {
        const { name, value } = e.target

        setData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    // upload photo (profile pic)
    const handleUploadPhoto = async (e) => {
        const file = e.target.files[0]

        const uploadPhoto = await uploadFile(file)

        setUploadPhoto(file)

        setData((prev) => {
            return {
                ...prev,
                profile_pic : uploadPhoto?.url
            }
        })
}

const handleClearUploadPhoto = (e) => {
    e.stopPropagation()
    e.preventDefault()
    setUploadPhoto(null)
}

// submit form
const handleSubmit = async(e) => {
    e.preventDefault()
    e.stopPropagation()

    const URL = `${process.env.VITE_BACKEND_URL}/api/register`

    try {
        const response = await axios.post(URL,data)
        console.log("register data", data)
    } catch (error) {
        console.log('error', error);
        
    }

    console.log("data", data);
    
}


return (
    <div className='mt-5'>
        <div className='bg-white w-full max-w-md mx:2 rounded overflow-hidden p-4 sm:mx-auto'>
            <h3>Welcom to chat app!</h3>

            <form className='grid gap-4 mt-5' onSubmit={handleSubmit}>
                {/* name */}
                <div className='flex flex-col gap-1'>
                    <label htmlFor='name'>Name :</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        placeholder='enter your name'
                        className='bg-slate-100 px-2 py-1 focus:outline-primary'
                        value={data.name}
                        onChange={handleOnChange}
                        required
                    />
                </div>

                {/* email */}
                <div className='flex flex-col gap-1'>
                    <label htmlFor='email'>Email :</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='enter your email'
                        className='bg-slate-100 px-2 py-1 focus:outline-primary'
                        value={data.email}
                        onChange={handleOnChange}
                        required
                    />
                </div>

                {/* password */}
                <div className='flex flex-col gap-1'>
                    <label htmlFor='password'>Password :</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        placeholder='enter your password'
                        className='bg-slate-100 px-2 py-1 focus:outline-primary'
                        value={data.password}
                        onChange={handleOnChange}
                        required
                    />
                </div>

                {/* profile_pic */}
                <div className='flex flex-col gap-1'>
                    <label htmlFor='profile_pic'>Photo :

                        <div className='h-14 bg-slate-200 flex justify-center items-center border hover:border-primary rounded cursor-pointer'>
                            <p className='text-sm max-w-[300px] text-ellipsis line-clamp-1 flex '>
                                {
                                    uploadPhoto?.name ? (uploadPhoto?.name.length > 30 ? `${uploadPhoto?.name.substring(0, 30)}...` : uploadPhoto?.name) : "Upload profile photo"
                                }
                                {
                                    uploadPhoto?.name &&
                                    <button onClick={handleClearUploadPhoto} className='text-lg ml-2 hover:text-red-600'>
                                        <X />
                                    </button>
                                }
                            </p>
                        </div>

                    </label>

                    <input
                        type='file'
                        id='profile_pic'
                        name='profile_pic'
                        className='bg-slate-100 px-2 py-1 focus:outline-primary hidden'
                        onChange={handleUploadPhoto}
                    />
                </div>

                <button
                    className=' bg-primary text-lg px-4 py-1 hover:bg-secondary rounded mt-2 font-bold text-white leading-relaxed tracking-wide'
                >
                    Register
                </button>
            </form>

            <p className='my-3 text-center'>Already have account ? <Link to={"/email"} className='hover:text-primary font-semibold'>Login</Link></p>
        </div>
    </div>
)
}

export default RegiesterPage
