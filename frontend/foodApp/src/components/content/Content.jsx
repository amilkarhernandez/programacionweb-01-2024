import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Content.css'
import mock from './mock.json'

export const Content = () => {

    const [data, setData] = useState([]);

    const handlerGetData = () => {
        axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=DEMO_KEY")
            .then((response => {
                console.log(response)
                setData(response.data.photos)
            }))
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        //handlerGetData()
        setData(mock);
        console.log(data)
    }, [])

    return (
        <>
            <div className='container_content'>
                {
                    data.map((elemento) => {
                        return <div className='content_img'><img src={elemento.img_src} /></div>
                    })
                }

            </div>
        </>
    )
}
