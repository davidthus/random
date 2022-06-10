import React from 'react'

function Song(props) {
  return (
    <figure className='bg-slate-400 rounded-2xl w-90 p-4 lg:p-2 shadow-2xl'>
      <figcaption className='font-bold text-xl mb-3 text-cyan-900'>{props.title}</figcaption>
      <audio controls src={props.src} className='mx-auto lg:w-80 md:w-80'></audio>
    </figure>
  )
}

export default Song;