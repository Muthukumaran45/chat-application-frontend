import React from 'react'

// icons
import { CircleUserRound } from 'lucide-react';

const Avatar = ({ userId, name, imageUrl, width, height }) => {


    // Muthu
    let avatarName = ""

    if (name) {
        const splitName = name?.split(" ")

        if (splitName.length > 1) {
            avatarName = splitName[0][0] + splitName[1][0]
        } else {
            avatarName = splitName[0][0]
        }
    }

    const bgColor = [
        'bg-slate-200',
        'bg-teal-200',
        'bg-red-200',
        'bg-green-200',
        'bg-yellow-200',
        'bg-cyan-200',
        'bg-sky-200',
        'bg-blue-200',



    ]

    const randomNumber = Math.floor(Math.random() * 9)
    console.log(randomNumber);

    return (
        <>
            <div className={`text-slate-800 overflow-hidden rounded-full shadow border text-xl font-bold ${bgColor[randomNumber]} `} style={{ width: width + "px", height: height + "px" }}>
                {
                    imageUrl ? (
                        <img
                            src={imageUrl}
                            width={width}
                            height={height}
                            alt={name}
                            className='overflow-hidden rounded-full'
                        />
                    ) : (
                        name ? (
                            <div style={{ width: width + "px", height: height + "px" }} className='overflow-hidden rounded-full flex justify-center items-center'>
                                {avatarName}
                            </div>
                        ) : (
                            <div>
                                <CircleUserRound size={width} absoluteStrokeWidth />
                            </div>
                        )
                    )
                }
            </div>
        </>
    )
}

export default Avatar
