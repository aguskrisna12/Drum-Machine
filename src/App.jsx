import { useEffect, useState } from 'react'
import './App.css'
import Drum from './Drum'



function App() {

  const audioData = [
    {
      keyTrigger: 'Q',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
      desc: 'Heater 1'
    },
    {
      keyTrigger: 'W',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
      desc: 'Heater 2'
    },
    {
      keyTrigger: 'E',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
      desc: 'Heater 3'
    },
    {
      keyTrigger: 'A',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
      desc: 'Heater 4'
    },
    {
      keyTrigger: 'S',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
      desc: 'Clap'
    },
    {
      keyTrigger: 'D',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
      desc: 'Open HH'
    },
    {
      keyTrigger: 'Z',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
      desc: "Kick n' Hat"
    },
    {
      keyTrigger: 'X',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
      desc: "Kick"
    },
    {
      keyTrigger: 'C',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
      desc: "Closed HH"
    },
  ]

  

  const [desc, setDesc] = useState('')

    const playAudio = (dataDesc, audio) => {
        audio.play()
        setDesc(dataDesc)
    }

    useEffect(() => {
      document.addEventListener('keydown', detectKeyDown, true)
    },[])

    const detectKeyDown = (e) => {
      // console.log("clicked " + e.key)
      const foundAudio = audioData.find(a => a.keyTrigger === e.key.toUpperCase());
      console.log(foundAudio)
      if (foundAudio) {
        playAudio(foundAudio.desc, new Audio(foundAudio.url));
      }
    }
  return (
    <>
      <div className='container' id='drum-machine'>
        <h1>FCC Drum Machine</h1>
        <div className='whole-drum' id='display'>
          {audioData.map((clip) => (
            <Drum dataClip={clip} playAudio={playAudio}/>
          ))}
        </div>
        <div>{desc}</div>
      </div>
    </>
  )
}

export default App
