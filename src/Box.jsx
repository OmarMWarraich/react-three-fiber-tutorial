import { useRef } from 'react';

const Box = (props) => {
    const ref = useRef();
    console.log(ref);

    return (
        <mesh {...props} ref={ref}>
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial color="hotpink" wireframe/>
        </mesh>
    )
}

export default Box