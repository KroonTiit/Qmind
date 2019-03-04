import React from 'react'
import { useSpring, animated } from 'react-spring'

//  here we create the top statement block and animate it
export default function GlobalStatement () {
    const props = useSpring({
            opacity: 1,
            marginTop: 0,
            from: { opacity: 0, marginTop: -500 }
        }
    )
    return (
        <animated.div style={props}>
           <div style={statementStyle}>
                <h3 style={h3}>Qminder is expanding arround the world</h3>
                <div style={textStyle}>
                    <p>Spreading a better experience</p>
                </div>
            </div>
        </animated.div>
        )
}

const statementStyle = {
    background: ' linear-gradient(60deg,#a3fb4e -20%,#31d970 90%)',
    fontFamily: 'Skolar Sans Latin Web,sans-serif',
    letterSpacing: '-0.8px',
    padding: '1.5rem',
    textAlign: 'left',
    fontSize: '35px',
    color: 'white',
}
const textStyle = {
    fontWeight: '100'
}
const h3 = {
    fontWeight: '100'
}
