import React from 'react';
import { useState } from 'react';
import './Editor.css';

export default function Editor({
  name,
  head,
  torso,
  legs,
  setName,
  setHead,
  setTorso,
  setLegs,
  setCatchphrase,
  setHeadCount,
  headCount,
  setTorsoCount,
  torsoCount,
  legsCount,
  setLegsCount,
}) {
  const [inputValue, setInputValue] = useState('');

  const handleClick = () => {
    if (inputValue === '') {
      return alert('please enter a catchphrase');
    } else {
      setCatchphrase((currentCatchphrase) => [...currentCatchphrase, inputValue]);
      setInputValue('');
    }
  };

  const handleChange = (e) => {
    e.target.name === 'name' && setName(e.target.value);
    e.target.name === 'head' &&
      setHead(
        e.target.value,
        setHeadCount(() => {
          return headCount + 1;
        })
      );
    e.target.name === 'torso' &&
      setTorso(
        e.target.value,
        setTorsoCount(() => {
          return torsoCount + 1;
        })
      );
    e.target.name === 'legs' &&
      setLegs(
        e.target.value,
        setLegsCount(() => {
          return legsCount + 1;
        })
      );
    e.target.name === 'catchphrase' && setCatchphrase(e.target.value);
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
        <select name="torso" value={torso} onChange={handleChange}>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="blue">Blue</option>
        </select>
        <label>Torso</label>
      </div>
      <div className="form-control">
        <select name="legs" value={legs} onChange={handleChange}>
          <option value="muscular">Muscular</option>
          <option value="feminine">Feminine</option>
          <option value="elf">Elf</option>
        </select>
        <label>Legs</label>
      </div>
      <div className="form-controls">
        <input name="catchphrase" type="text" onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={handleClick}></button>
        <label>Catchphrase</label>
      </div>
    </div>
  );
}
