import React from 'react';

import './Editor.css';

export default function Editor({ name, head, setName, setHead }) {
  const handleChange = (e) => {
    e.target.name === 'name' && setName(e.target.value);
    e.target.name === 'head' && setHead(e.target.value);
  };
  return (
    <div className="editor">
      <div className="form-control">
        <input name="name" type="text" value={name} onChange={handleChange} />
        <label htmlFor="name">Name</label>
      </div>
      <div className="form-control">
        <select name="head" value={head} onChange={handleChange}>
          <option value="rock">Rock</option>
          <option value="cage">Cage</option>
          <option value="frank">Frank</option>
        </select>
        <label>Head</label>
      </div>
      <div className="from-control">
        <select name="torso">
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="blue">Blue</option>
        </select>
        <label>Torso</label>
      </div>
      <div className="form-control">
        <select name="legs">
          <option value="muscular">Muscular</option>
          <option value="feminine">Feminine</option>
          <option value="elf">Elf</option>
        </select>
        <label>Legs</label>
      </div>
      <div className="form-controls">
        <textarea name="catchphrase" />
        <label>Catchphrase</label>
      </div>
    </div>
  );
}
