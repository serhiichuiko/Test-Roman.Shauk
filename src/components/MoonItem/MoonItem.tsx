import React from 'react';
import cn from 'classnames';
import './MoonItem.css';

interface MoonItemProps {
    moons: ItemMoon[],
    moonsCount: MoonCount[],
    toggleMoon: (arg: number) => void;
}

interface ItemMoon {
    id: number,
    title: string,
}

interface MoonCount {
    id: number,
    title: string,
}

const MoonItem: React.FC<MoonItemProps> = ({moons, toggleMoon, moonsCount}) => (
    <>
        {
            moons.map((moon) => {
                const moonIndex = moonsCount.findIndex(item => item.id === moon.id);
                return (
                    <div
                        className={cn('moon', {active: moonIndex !== -1})}
                        onClick={() => toggleMoon(moon.id)}
                        key={moon.id}>
                        {moon.title}
                    </div>
                )
            })
        }
    </>

)

export default MoonItem;