import React from 'react'

function Song(props) {
  return (
    <figure className='bg-slate-400 rounded-2xl w-90 p-4'>
      <figcaption className='font-bold text-xl mb-3'>{props.title}</figcaption>
      <audio controls src="../../public/assets/music/october.mp3" className='mx-auto xl:w-64'></audio>
    </figure>
  )
}

export default Song;