import React from 'react';
import './Stats.css';

export default function Stats({ catchphrase }) {
  return (
    <>
      <div className="stats-container">
        <p></p>
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
