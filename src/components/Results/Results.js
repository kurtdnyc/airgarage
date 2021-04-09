import React from 'react'
import './Results.css'

export const Results = ({garages}) => {
    return (
        <div className="Results">Results
        {garages.map((garage) =>(
            <div className ="card">
                <img src={garage.image_url}></img>
                <h2>{garage.name}</h2>
                <div>Rating: {garage.rating}</div>
                <div>Review Count: {garage.review_count}</div>
                <div>Address: {garage.location.address1}</div>
                <a href={garage.url}>Yelp</a>
                <div>score: {
                (garage.review_count * garage.rating)/
                (garage.review_count + 1)
                }</div>
                
            </div>
            ))}
        </div>
        
    )
}