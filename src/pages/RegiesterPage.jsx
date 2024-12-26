import React, { useState } from 'react'
import { X } from 'lucide-react';

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

    const handleUploadPhoto = (e) => {
        const file = e.target.files[0]

        setUploadPhoto(file)
    }

    const handleClearUploadPhoto = (e) => {
        e.stopPropagation()
        e.preventDefault()
        setUploadPhoto(null)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        e.stopPropagation()
    }

    console.log('upload photo name', uploadPhoto);

    return (
        <div className='mt-5'>
            <div className='bg-white w-full max-w-sm mx-2 rounded overflow-hidden p-4 '>
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
                                        uploadPhoto?.name ? uploadPhoto?.name : "Upload profile photo"
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
                            value={data.password}
                            onChange={handleUploadPhoto}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegiesterPage
