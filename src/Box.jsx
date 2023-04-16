import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Box = (props) => {
    const ref = useRef();
    
    useFrame((_, delta) => {
        ref.current.rotation.x += 1 * delta;
        ref.current.rotation.y += 1 * delta;
        ref.current.rotation.z += 2 * delta;
    })

    return (
        <mesh 
            {...props} 
            ref={ref}
            onClick={(e) => console.log('click' + e.object.name)}
            onContextMenu={(e) => console.log('context menu' + e.object.name)}
            onDoubleClick={(e) => console.log('double click' + e.object.name)}
            onWheel={(e) => console.log('wheel spins' + e.object.name)}
            onPointerUp={(e) => console.log('up' + e.object.name)}
            onPointerDown={(e) => console.log('down' + e.object.name)}
            onPointerOver={(e) => console.log('over' + e.object.name)}
            onPointerOut={(e) => console.log('out' + e.object.name)}
            onPointerEnter={(e) => console.log('enter' + e.object.name)} // see note 1
            onPointerLeave={(e) => console.log('leave' + e.object.name)} // see note 1
            onPointerMove={(e) => console.log('move' + e.object.name)}
            // onPointerMissed={() => console.log('missed' + e.object.name)}
            // onUpdate={(self) => console.log('props have been updated' + e.object.name)}

        >
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial color="hotpink" wireframe/>
        </mesh>
    )
}

export default Box