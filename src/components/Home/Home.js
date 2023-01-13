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

  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      <Editor name={name} setName={setName} />
      <Preview name={name} />
      <Stats />
    </main>
  );
}
