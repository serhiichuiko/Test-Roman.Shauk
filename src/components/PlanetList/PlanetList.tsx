import React from 'react';
import './PlanetList.css';
import { planets, moons } from '../../constants'
import MoonList from '../MoonList';

const PlanetList = () => {
    const planetsWithMoons = planets.map(planet => {
        const matchedMoons = moons.filter(moon => moon.planetId === planet.id);
        return {
          ...planet,
          moons: matchedMoons
        };
      });
    return (
        <div className='block'>
            {planetsWithMoons.map((planet) => (
                <MoonList key={planet.id} id={planet.id} title={planet.title} moons={planet.moons} />
            ))}
        </div>
    )
}

export default PlanetList;