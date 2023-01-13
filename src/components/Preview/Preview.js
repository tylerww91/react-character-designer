import React from 'react';

import './Preview.css';

export default function Preview({ name, head }) {
  return (
    <>
      <div className="preview">
        <h2 key="name">{name}</h2>
        <img className="head" src={`/head/${head}.png`} />
        <img className="torso" src="../../green-torso.png" />
        <img className="legs" src="../../elf-legs.png" />
      </div>
    </>
  );
}
