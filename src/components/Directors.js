import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => {
        return (
          <div>
            Name: {director.name}<br></br>
            {director.movies.map(movie => {
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
}

export default Directors
