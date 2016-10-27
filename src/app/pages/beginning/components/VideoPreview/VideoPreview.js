import React from 'react'
import { StyleSheet } from 'elementum'
import { PlayIcon } from 'avrs-ui/src/icons'

const styles = StyleSheet.create({
  self: {
    width: '234px',
    height: '136px',
    backgroundImage: 'url(./video_preview.png)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover svg': {
      opacity: 0.8,
    },
    cursor: 'pointer',
  },
})

const VideoPreview = () => (
  <div className={styles()}>
    <PlayIcon
      height={35}
      fill='#ffffff'
    />
  </div>
)

export default VideoPreview
