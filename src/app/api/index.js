import url from 'url'

export default function createApi(dispatch, getState) {
  const apiEndpoint = 'https://api.stage.aversis.net/v1/'

  const defaultOptions = {
    credentials: 'same-origin',
    headers: {},
    query: {},
  }

  const request = async (method, href, options = {}) => {
    const mergeOptions = {
      ...defaultOptions,
      ...options,
      method,
      headers: {
        ...defaultOptions.headers,
        ...options.headers,
      },
    }

    const { token } = getState().user

    if (token) {
      mergeOptions.headers = {
        Authorization: token,
      }
    }

    if (mergeOptions.json) {
      mergeOptions.body = JSON.stringify(mergeOptions.json)
      mergeOptions.headers = {
        ...mergeOptions.headers,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }

      delete mergeOptions.json
    }

    if (mergeOptions.files) {
      const form = new FormData()
      const files = mergeOptions.files

      Object.keys(files).forEach(key => form.append(key, files[key], files[key].name))

      mergeOptions.body = form

      delete mergeOptions.files
    }

    try {
      const inputUrl = url.format({
        ...url.parse(`${apiEndpoint}${href}`),
        query: mergeOptions.query,
      })

      const response = await fetch(inputUrl, mergeOptions)
      const text = await response.text()
      const result = JSON.parse(text)

      return { result, response }
    } catch (err) {
      console.log(err) // eslint-disable-line no-console

      Promise.reject(err)

      return { response: {} }
    }
  }

  return {
    get: async function get(href, options) {
      return await request('GET', href, options)
    },
    post: async function post(href, options) {
      return await request('POST', href, options)
    },
    put: async function put(href, options) {
      return await request('PUT', href, options)
    },
    destroy: async function destroy(href, options) {
      return await request('DELETE', href, options)
    },
  }
}
