import { Canvas } from '@react-three/fiber'
import { PointerLockControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useEffect, useState } from 'react'

const App = () => {
    const [showInstructions, setShowInstructions] = useState(true)

    const pointerLockChange =() => {
        setShowInstructions(!showInstructions)
    }


    useEffect(() => {
        document.addEventListener('pointerlockchange', pointerLockChange, false)
        return () => {
            document.removeEventListener('pointerlockchange', pointerLockChange, false)
        }
    })

    return (
        <>
            <Canvas>
                <mesh>
                    <boxGeometry
                        args={[100, 10, 100, 100, 10, 100]}
                    />
                    <meshBasicMaterial
                        wireframe
                        color={'lime'}
                    />
                </mesh>
                <PointerLockControls selector="#button"/>
                <Perf position='top-right'/>

            </Canvas>
            <div
              id="instructions"
              className={showInstructions ? 'show' : 'hide'}
            >
                Instructions
                <button id="button">Click To Enter</button>
            </div>
        </>
    )
}

export default App;