import React, { useRef, useState } from 'react';

import GenerateCircle from '../GenerateCircle'
import MoonItem from '../MoonItem'

import './MoonList.css';

interface Planet {
    id: number,
    title: string,
    moons: MoonProps[],
}

interface MoonProps {
    id: number,
    planetId: number,
    title: string,
}

interface MoonCount {
    id: number,
    title: string
}

const MoonList: React.FC<Planet> = ({
    title,
    moons,
}) => {
    const [moonsCount, setMoonsCount] = useState<MoonCount[]>([]);
    const refPlanet = useRef<HTMLDivElement>(null);
    const toggleMoon = (itemId: number) => {
        const itemIndex = moonsCount.findIndex(item => item.id === itemId);
    
        if (itemIndex !== -1) {
          // Item exists, remove it from the array
          setMoonsCount(prevItems => prevItems.filter(item => item.id !== itemId));
        } else {
          // Item doesn't exist, add it to the array
          const newItem: MoonCount = { id: itemId, title: `Item ${itemId}` };
          setMoonsCount(prevItems => [...prevItems, newItem]);
        }
      };
      const planetWidth = refPlanet.current?.getBoundingClientRect()?.width;
      const planetHeight = refPlanet.current?.getBoundingClientRect()?.height;
    return (
        <div className='planetBlock'>
            <div ref={refPlanet} className='planet'>
                    <GenerateCircle moonsCount={moonsCount} planetWidth={planetWidth} planetHeight={planetHeight} />
                {title}
                <span className='count'>{moonsCount.length || ''}</span>
            </div>
            <MoonItem moons={moons} toggleMoon={toggleMoon} moonsCount={moonsCount} />
        </div>
    )
}

export default MoonList;