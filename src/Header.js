import React from 'react'

export default function Header({ fetchRandom }) {

    return (
        <div className="header">
            <button className="button_slide" onClick={fetchRandom}>Return a random page, broh</button>
        </div>
    )
}
