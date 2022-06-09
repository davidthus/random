import React from 'react';
import Song from './Song.js';

const songs = [{
  title: "October",
  src: "../../public/assets/music/october.mp3"
}]

function SongList() {
  return (
    <main className='grid w-4/5 xl:grid-cols-3 grid-cols-2 mx-auto mt-8'>
      <Song title={songs[0].title} src={songs[0].src} />
    </main>
  )
}

export default SongList;