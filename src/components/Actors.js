import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div className='actor'>
      <h1>Actors Page</h1>
      {actors.map(actor => {
        return (
          <div>
            Name: {actor.name}<br></br>
            {actor.movies.map(movie => {
              return (
                <ul>
                  Movies: {movie}
                </ul>
              )
            })}
          </div>
        )
      })}
      
    </div>
  );
};

export default Actors;
