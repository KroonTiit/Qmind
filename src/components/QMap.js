import React from 'react'
import { useSpring, animated } from 'react-spring'
import MapAnimation from './Map'

//  creating our map block and animating it on to the screen
export default function QMap () {
    const props = useSpring({
            opacity: 1,
            from: { opacity: 0 },
            delay: 800,
            config: { duration: 1000 }
        }
    )
    return (
        <animated.div style={props}>
            <div style={{display: 'flex', margin: '0 auto', width: '50%'}}>
                <MapAnimation />
            </div>
        </animated.div>
    )
}
