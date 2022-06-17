import React, {useRef} from 'react'

function Song(props) {

  const caption = useRef(null);

  function handlePlay(){
    caption.current.style.color = "#a64253";
  }

  function handlePause(){
    caption.current.style.color = "green";
  }

  return (
    <figure className='bg-slate-400 rounded-2xl w-90 p-4 lg:p-2 shadow-2xl'>
      <figcaption className='font-bold text-xl mb-3 text-cyan-900' ref={caption}>{props.title}</figcaption>
      <audio controls src={props.src} onPlay={handlePlay} onPause={handlePause} className='mx-auto lg:w-80 md:w-80'></audio>
    </figure>
  )
}

export default Song;