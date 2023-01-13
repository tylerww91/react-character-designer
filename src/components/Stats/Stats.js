import React from 'react';
import './Stats.css';

export default function Stats({ catchphrase, headCount, torsoCount }) {
  return (
    <>
      <div className="stats-container">
        <p>
          You have changed heads {headCount} times
          <br />
          You have changed torsos {torsoCount} times{' '}
        </p>
        <ul key="catchphrase">
          {catchphrase.map((phrase, i) => {
            i += 1;
            return (
              <li id={i} key={i}>
                {`"${phrase}`}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
