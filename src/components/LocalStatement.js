import React from 'react'
import { useSpring, animated } from 'react-spring'

//  here we create the lower statement block and animate it
export default function LocalStatement () {
    const props = useSpring({
            opacity: 1,
            from: { opacity: 0 },
            delay: 1000,
            config: { duration: 1000 }
        }
    )
    return (
        <div style={statementStyle}>
        <animated.div style={props}>
            
                <div>
                    <p>Now is your time! Start free trial</p>
                </div>
                <div style={textStyle}>
                    <p>Hire Tiit!</p>
                </div>
            
        </animated.div>
        </div>
        )
}
const statementStyle = {
    background: 'linear-gradient(-150deg,#a3fb4e -20%,#31d970 90%)',
    color: 'white',
    fontFamily: 'Skolar Sans Latin Web,sans-serif',
    fontWeight: '500',
    letterSpacing: '-0.8px',
    fontSize: '35px',
    width: '100%',
    display: 'inline-block',
    textAlign: 'center',
  
}
const textStyle = {
    
}
