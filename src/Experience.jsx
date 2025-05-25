import { Perf } from 'r3f-perf'
import { OrbitControls } from '@react-three/drei'
import { useCubeControls } from './controls/useCubeControls.js'
import { useSphereControls } from './controls/useSphereControls.js'
import { useControls } from 'leva'

export default function Experience() {
    const { positionCube, colorCube, visibleCube, scaleCube } =
        useCubeControls()
    const { positionSphere, colorSphere, visibleSphere, scaleSphere } =
        useSphereControls()

    const { perfVisible } = useControls({
        perfVisible: true,
    })

    return (
        <>
            {perfVisible && <Perf position='top-left' />}
            <OrbitControls makeDefault />

            <directionalLight position={[1, 2, 3]} intensity={4.5} />
            <ambientLight intensity={1.5} />

            <mesh
                position={[positionSphere.x, positionSphere.y, 0]}
                visible={visibleSphere}
                scale={scaleSphere}
            >
                <sphereGeometry />
                <meshStandardMaterial color={colorSphere} />
            </mesh>

            <mesh
                position={[positionCube.x, positionCube.y, 0]}
                visible={visibleCube}
                scale={scaleCube}
            >
                <boxGeometry />
                <meshStandardMaterial color={colorCube} />
            </mesh>

            <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
                <planeGeometry />
                <meshStandardMaterial color='greenyellow' />
            </mesh>
        </>
    )
}
