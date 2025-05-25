import { button, useControls } from 'leva'

export function useSphereControls() {
    return useControls(
        'Sphere',
        {
            scaleSphere: {
                value: 1,
                min: 0,
                max: 5,
                step: 0.01,
            },
            positionSphere: {
                value: { x: -2, y: 0 },
                step: 0.01,
                joystick: 'invertY',
            },
            colorSphere: '#790000',
            visibleSphere: true,
            myInterval: {
                min: 0,
                max: 10,
                value: [4, 5],
            },
            clickMe: button(() => {
                console.log('Sphere button working')
            }),
            choice: { options: ['a', 'b', 'c'] },
        },
        { collapsed: true }
    )
}
