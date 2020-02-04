import React from 'react'

export default function Issue(props){
    const { title, description, _id, votes } = props
    return(
        <div className="issue">
            <h1>{ title }</h1>
            <h2>{ description }</h2>
            <h3>{ votes }</h3>
        </div>
    )
}