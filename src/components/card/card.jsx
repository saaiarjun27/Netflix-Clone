import React, { Component } from 'react'
import './card.css'
export default function Card(props) {
    const imageURL = `https://image.tmdb.org/t/p/w500${props.poster}`;
    console.log(imageURL)
    return(
        <div>
            <img className='card_poster' src={imageURL} alt='poster' />
        </div>
    )
}