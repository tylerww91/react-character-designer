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

  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      <Editor
        name={name}
        setName={setName}
        head={head}
        setHead={setHead}
        torso={torso}
        setTorso={setTorso}
      />
      <Preview name={name} head={head} torso={torso} />
      <Stats />
    </main>
  );
}
