/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import { Row, Layout } from 'flex-layouts'
import { StyleSheet } from 'elementum'
import { DownloadAppIcon } from 'avrs-ui/src/icons'
import { Text } from 'avrs-ui/src/text'

const styles = StyleSheet.create({
  self: {
    width: '200px',
    height: '200px',
    boxSizing: 'border-box',
    borderRadius: '10px',
    border: '2px dashed #E5E5E5',
    cursor: 'pointer',
    '&:hover': {
      borderColor: '#0288D1',
    },
  },
})

const downloadApp = () => {
  window.location.assign('http://94.142.140.12:3000/download/latest/windows_64')
}

const Win = () => (
  <div
    className={styles()}
    onClick={downloadApp}
  >
    <Row fill align='center'>
      <Layout grow={1} />
      <Layout>
        <DownloadAppIcon height={90} />
      </Layout>
      <Layout basis='12px' />
      <Layout>
        <Text color='gray250' size='xsmall'>
          Aversis.exe
        </Text>
      </Layout>
      <Layout basis='2px' />
      <Layout>
        <Text color='gray400' size='xsmall'>
          Для Windows
        </Text>
      </Layout>
      <Layout basis='20px' />
    </Row>
  </div>
)

export default Win
