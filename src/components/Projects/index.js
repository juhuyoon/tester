import { useState } from 'react'
// useEffect,
import Loader from 'react-loaders'
import AnimatedCharacters from '../AnimatedCharacters'
import projects from "../../projects.json"
import "./index.scss"


const Projects = () => {
    const [characterClass] = useState('text-animate')
    // , setCharacterClass
    return (
        <>
            <div className="conatainer projects-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedCharacters
                            characterClass={characterClass}
                            characterArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                            index={15}
                        />
                    </h1>
                    {projects.length ? projects.map((proj) => (
                        <div className='card'>
                            <image src={proj.image} alt={proj.name} className="projImg" />
                            <h1>{proj.name}</h1>
                            <p>{proj.description}</p>
                            <div>
                                <button><a href={proj.github}>Repo</a></button>
                                <button><a href={proj.live}>Live</a></button>
                            </div>
                        </div>
                    )) : null}
                    </div>
            </div>
            <Loader type="cube-transition" />
        </>
    )
}

export default Projects