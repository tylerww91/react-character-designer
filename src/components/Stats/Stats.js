import React from 'react';
import './Stats.css';

export default function Stats({ catchphrase, headCount }) {
  return (
    <>
      <div className="stats-container">
        <p>You have changed heads {headCount} times</p>
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
