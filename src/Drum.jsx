import ReactAudioPlayer from 'react-audio-player';

function Drum({ dataClip, playAudio }) {    

    let audio = new Audio(dataClip.url)

    return (
        <>
            <button
                className='drum-pad'
                id={dataClip.keyTrigger}
                onClick={() => playAudio(dataClip.desc, audio)}
            >
                <ReactAudioPlayer
                    src={dataClip.url}
                />
                {dataClip.keyTrigger}
            </button>
        </>
    )
}

export default Drum