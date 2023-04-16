import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Box = (props) => {
    const ref = useRef();
    
    useFrame((_, delta) => {
        ref.current.rotation.x += 1 * delta;
        ref.current.rotation.y += 1 * delta;
        ref.current.rotation.z += 1 * delta;
    })

    return (
        <mesh {...props} ref={ref}>
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial color="hotpink" wireframe/>
        </mesh>
    )
}

export default Box