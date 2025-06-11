import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/alok31796')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data)
    //         })
    // }, [])

    const data = useLoaderData()
    
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followlers: {data.followers}
            <img src={data.avatar_url} width={300} alt="Git Image" />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/alok31796')
    return res.json()
}
