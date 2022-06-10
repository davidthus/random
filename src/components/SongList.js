import React from 'react';
import Song from './Song.js';
import songlist from '../assets/index.js';

function SongList() {

  const songs = [];

  songlist.forEach((song, index) => {
    songs.push(<Song key={index} title={song.title} src={song.src} />)
  })

  return (
    <main className='grid w-5/6 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3  grid-cols-1 mx-auto mt-8'>
      {songs}
    </main>
  )
}

export default SongList;