import React from 'react'

function Song(props) {
  return (
    <figure className='bg-slate-400 rounded-2xl w-90 p-4 lg:p-2'>
      <figcaption className='font-bold text-xl mb-3 text-lime-800'>{props.title}</figcaption>
      <audio controls src="../../public/assets/music/october.mp3" className='mx-auto lg:w-80 md:w-80'></audio>
    </figure>
  )
}

export default Song;