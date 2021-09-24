import React from 'react'

export default function Header({ fetchRandom }) {

    return (
        <div>
            <button onClick={fetchRandom}>Return a random page, broh</button>
        </div>
    )
}
