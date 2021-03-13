import React from 'react'
import BnbCard from '../components/BnbCard'
import location from '../images/ralph-ravi-kayden-2d4lAQAlbDA-unsplash.jpg';
import person from '../images/christopher-campbell-rDEOVtE7vOs-unsplash.jpg';

const BnbCardContainer = () => {
    const locations = [
        {
            img: location,
            rating: Math.floor(Math.random() * 5) + 1,
            description: "Lovely atmosphere",
            hostImg: person,
            hostName: "bob",
            hostLocation: "United States" 
        },
        {
            img: location,
            rating: Math.floor(Math.random() * 5) + 1,
            description: "Very Cozy",
            hostImg: person,
            hostName: "Helena",
            hostLocation: "Uruguay"
        },
        {
            img: location,
            rating: Math.floor(Math.random() * 5) + 1,
            description: "Nothing to write home about",
            hostImg: person,
            hostName: "Fernando",
            hostLocation: "Arecibo"
        },
        {
            img: location,
            rating: Math.floor(Math.random() * 5) + 1,
            description: "Like staying in a fantasy world!",
            hostImg: person,
            hostName: "Rosalia",
            hostLocation: "Estes Park"
        },
        {
            img: location,
            rating: Math.floor(Math.random() * 5) + 1,
            description: "Super Chill",
            hostImg: person,
            hostName: "Mike",
            hostLocation: "Louisiana"
        },
    ]

    const locationCards = locations.map(l => {
        return <BnbCard location={l}/>
    })
    return (
        
        <div>
            {locationCards}
        </div>
    )
}

export default BnbCardContainer