import { useState, useCallback } from 'react'
import { BouquetScene } from './components/bouquet/BouquetScene'
import { AudioPlayer } from './components/audio/AudioPlayer'

function App() {
  const [audioEnabled, setAudioEnabled] = useState(false)

  const toggleAudio = useCallback(() => {
    setAudioEnabled(prev => !prev)
  }, [])

  return (
    <>
      <BouquetScene isWallpaper={true} />
      
      <AudioPlayer enabled={audioEnabled} onToggle={toggleAudio} />
    </>
  )
}

export default App