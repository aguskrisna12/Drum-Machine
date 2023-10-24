

function Drum({dataClip}) {

    let audio = new Audio(dataClip.url)

    const playAudio = () => {
        audio.play()
    }

  return (
    <>
        <button 
            className='drum-pad'
            id={dataClip.keyTrigger}
            onClick={playAudio}
         >
            <audio src={dataClip.url}>{dataClip.keyTrigger}</audio>
            {dataClip.keyTrigger}
        </button>
    </>
  )
}

export default Drum