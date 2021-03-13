import React from 'react'

const BnbCard = (props) => {
    // {
//     img: location,
//         rating: Math.floor(Math.random() * 5) + 1,
//             description: "Super Chill",
//                 hostImg: person,
//                     hostName: "Mike",
//                         hostLocation: "Louisiana"
// },
//     ]
    return (
        <div>
            <img src={props.location.img} width="200" height="121"></img>
            <div><span>rating is {props.location.rating}</span></div>
            <p>{props.location.description}</p>
            <div>
                <div><img src={props.location.hostImg} width="200" height="121"></img></div>
            </div>
            <div>
                <span>{props.location.hostName}</span>
                <br></br>
                <span>{props.location.hostLocation}</span>
            </div>
            
        </div>
    )
}

export default BnbCard
