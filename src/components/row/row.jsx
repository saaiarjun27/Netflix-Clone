import React, { useState, useEffect } from 'react'
import './row.css'
import axios from 'axios'
import Card from '../card/card'



export default function Row(props) {
    const [movies,setMovies] = useState([])
    const fetchMovies = async () => {
        const response = await axios.get(props.url)
        setMovies(response.data.results)
    }
    useEffect(() => {
        fetchMovies();
    },[])
    return(
        <div className='row_wrapper'>
            <h3 className='row_title'>{props.title}</h3>
            <div className='row_card'>
                {
                    movies.map((el)=>  {
                        console.log(el)
                        return <Card title = {el.title} poster = {el.poster_path}/>
                    })
                }
            </div>
            
        </div>
    )
}