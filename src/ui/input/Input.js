import React, { PropTypes } from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    height: '32px',
    boxSizing: 'border-box',
    background: 'transparent',
    boxShadow: 'none',
    border: '1px solid #dfe4e8',
    borderRadius: '4px',
    padding: '0 12px',
    fontFamily: '"Ubuntu",sans-serif',
    fontWeight: 400,
    fontSize: '14px',
    outline: 'none',
    color: '#262626',
    '&:focus': {
      borderColor: '#b9b9b9',
    },
    '&::-webkit-input-placeholder': {
      fontWeight: 300,
      color: '#b9b9b9',
    },
  },
  disabled: {
    opacity: 0.6,
  },
})

const Input = ({ value, disabled, onChange, ...props }) => (
  <input
    {...props}
    value={value}
    disabled={disabled}
    className={styles({ disabled })}
    onChange={({ target }) => onChange && onChange(target.value)}
  />
)

Input.propTypes = {
  value: PropTypes.any,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
}

export default Input
