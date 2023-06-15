import { useState } from 'react'
// useEffect,
import Loader from 'react-loaders'
import AnimatedCharacters from '../AnimatedCharacters'
import "./index.scss"

const Resume = () => {
    const [characterClass] = useState('text-animate')
    // , setCharacterClass
    return (
        <>
            <div className="conatainer projects-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedCharacters
                            characterClass={characterClass}
                            characterArray={['R', 'e', 's', 'u', 'm', 'e']}
                            index={15}
                        />
                    </h1>
                    
                    </div>
                    </div>
                    <Loader type="cube-transition" />
                    </>
)
}

export default Resume