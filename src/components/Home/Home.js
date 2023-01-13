// import { useState } from 'react';
import React from 'react';
import { useState } from 'react';

import background from '../../final-destination.jpg';

import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';
import Stats from '../Stats/Stats';

import './Home.css';

export default function Home() {
  const [name, setName] = useState('');
  const [head, setHead] = useState('rock');
  const [torso, setTorso] = useState('green');
  const [legs, setLegs] = useState('muscular');
  const [catchphrase, setCatchphrase] = useState([]);
  const [headCount, setHeadCount] = useState(0);
  const [torsoCount, setTorsoCount] = useState(0);

  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      <Editor
        name={name}
        setName={setName}
        head={head}
        setHead={setHead}
        torso={torso}
        setTorso={setTorso}
        legs={legs}
        setLegs={setLegs}
        headCount={headCount}
        setCatchphrase={setCatchphrase}
        setHeadCount={setHeadCount}
        torsoCount={torsoCount}
        setTorsoCount={setTorsoCount}
      />
      <Preview name={name} head={head} torso={torso} legs={legs} />
      <Stats catchphrase={catchphrase} headCount={headCount} torsoCount={torsoCount} />
    </main>
  );
}
