import { button, useControls } from 'leva'

export function useCubeControls() {
    return useControls(
        'Cube',
        {
            scaleCube: {
                value: 1,
                min: 0,
                max: 5,
                step: 0.01,
            },
            positionCube: {
                value: { x: 2, y: 0 },
                step: 0.01,
                joystick: 'invertY',
            },
            colorCube: '#02878d',
            visibleCube: true,
            myInterval: {
                min: 0,
                max: 10,
                value: [4, 5],
            },
            clickMe: button(() => {
                console.log('Cube button working')
            }),
            choice: { options: ['a', 'b', 'c'] },
        },
        { collapsed: true }
    )
}
