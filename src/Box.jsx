const Box = () => {
    return (
        <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial color="hotpink" wireframe/>
        </mesh>
    )
}

export default Box