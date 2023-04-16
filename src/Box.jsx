import { useRef, useEffect } from 'react';

const Box = (props) => {
    const ref = useRef();
    useEffect(() => {
        console.log(ref.current);
    });

    return (
        <mesh {...props} ref={ref}>
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial color="hotpink" wireframe/>
        </mesh>
    )
}

export default Box