/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import { StyleSheet } from 'elementum'
import { Input } from 'avrs-ui/src/input'

const styles = StyleSheet.create({
  self: {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    '& a': {
      position: 'absolute',
      right: 0,
      padding: '8px 12px',
      borderLeft: '1px solid #e5e5e5',
      color: '#0288d1',
      cursor: 'pointer',
      '&:hover': {
        background: 'rgba(0, 0, 0, 0.02)',
      },
    },
  },
})

const ApplyCode = ({ value, placeholder, onChange, onApply }) => (
  <div className={styles()}>
    <Input
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
    <a onClick={onApply}>
      &#10095;
    </a>
  </div>
)

export default ApplyCode
