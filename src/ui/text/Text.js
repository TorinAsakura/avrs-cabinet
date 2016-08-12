import React, { PropTypes } from 'react'
import { StyleSheet } from 'elementum'
import fonts from 'google-fonts'

fonts.add({ Ubuntu: [300, 400, 500, '&subset=cyrillic'] })

const styles = StyleSheet.create({
  self: {
    display: 'inline-flex',
    fontFamily: '"Ubuntu",sans-serif',
    fontWeight: 400,
    lineHeight: 1.1,
    color: '#000000',
  },
  'size=xxlarge': {
    fontSize: '36px',
  },
  'size=xlarge': {
    fontSize: '30px',
  },
  'size=large': {
    fontSize: '24px',
  },
  'size=medium': {
    fontSize: '18px',
  },
  'size=normal': {
    fontSize: '16px',
  },
  'size=small': {
    fontSize: '14px',
  },
  'size=xsmall': {
    fontSize: '12px',
  },
  'color=blue400': {
    color: '#0288d1',
  },
  'color=gray300': {
    color: '#757575',
  },
})

const Text = ({ children, size = 'normal', color }) => (
  <span className={styles({ size, color })}>
    {children}
  </span>
)

Text.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
  size: PropTypes.oneOf([
    'xxlarge',
    'xlarge',
    'large',
    'medium',
    'normal',
    'small',
    'xsmall',
  ]),
  color: PropTypes.string,
}

export default Text
