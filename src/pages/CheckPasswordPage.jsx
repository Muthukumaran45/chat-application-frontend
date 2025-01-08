import React, { useState } from 'react'

// icons
import { CircleUserRound } from 'lucide-react';

// file
import uploadFile from '../helpers/uploadFile';

// package
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Avatar from '../components/Avatar';


function CheckPasswordPage() {
    const [data, setData] = useState({
        password: "",
    })

    const location = useLocation()
    const navigate = useNavigate()


    console.log("location", location.state);

    const handleOnChange = (e) => {
        const { name, value } = e.target

        setData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }


    // submit form
    const handleSubmit = async (e) => {
        e.preventDefault()
        e.stopPropagation()

        const URL = `${import.meta.env.VITE_BACKEND_URL}/api/password`;

        try {
            const response = await axios.post(URL, data)

            toast.success(response.data.message)
            if (response.data.success) {
                setData({
                    password: "",
                })

                navigate('/password')

            }
        } catch (error) {
            toast.error(error?.response?.data?.message)
            console.log('error', error);

        }

        console.log("data", data);

    }


    return (
        <div className='mt-5'>
            <div className='bg-white w-full max-w-md mx:2 rounded overflow-hidden p-4 sm:mx-auto'>

                <div className='w-fit mx-auto mb-2'>
                    {/* <CircleUserRound size={80} absoluteStrokeWidth /> */}

                    <Avatar
                        width={60}
                        height={70} 
                        name={'Muthu kumaran'}
                    />
                </div>

                <h3>Welcom to chat app!</h3>

                <form className='grid gap-4 mt-3' onSubmit={handleSubmit}>

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

                    <button
                        className=' bg-primary text-lg px-4 py-1 hover:bg-secondary rounded mt-2 font-bold text-white leading-relaxed tracking-wide'
                    >
                        Let's Go
                    </button>
                </form>

                <p className='my-3 text-center'>Already have account ? <Link to={"/register"} className='hover:text-primary font-semibold'>Register</Link></p>
            </div>
        </div>
    )
}

export default CheckPasswordPage
