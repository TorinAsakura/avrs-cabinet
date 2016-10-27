import React, { PropTypes } from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    padding: '20px 0',
    height: '100%',
    boxSizing: 'border-box',
  },
})

const heights = {
  '/auth/login': 500,
  '/auth/registration': 700,
}

const Container = ({ children, pathname }) => (
  <div
    className={styles()}
    style={{ minHeight: heights[pathname] }}
  >
    {children}
  </div>
)

Container.propTypes = {
  children: PropTypes.element,
  pathname: PropTypes.string,
}

export default Container
