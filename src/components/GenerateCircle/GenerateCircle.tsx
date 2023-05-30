import React from 'react';
import './GenerateCircle.css';

interface GenerateCircleProps {
    moonsCount: MoonCount[],
    planetWidth: number | undefined,
    planetHeight: number | undefined,
}

interface MoonCount {
    id: number,
    title: string,
}

const GenerateCircle: React.FC<GenerateCircleProps> = ({moonsCount, planetWidth, planetHeight}) => (
    <>
        {
            moonsCount.map((moon, index: number) => {
                const newIndex = index + 1;
                return (
                <div
                    className='circle'
                    style={{width: planetWidth! + (20*newIndex), height: planetHeight! + (20*newIndex)}}
                    id={index.toString()}
                    key={index}>
                </div>
                )
            })
        }
    </>

)

export default GenerateCircle;