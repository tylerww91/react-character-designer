// import { useState } from 'react';
import React from 'react';
import background from '../../final-destination.jpg';

import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';
import Stats from '../Stats/Stats';

import './Home.css';

export default function Home() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      <Editor />
      <Preview />
      <Stats />
    </main>
  );
}
