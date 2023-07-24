import { renderToString } from 'solid-js/web'
import { Router } from '@solidjs/router'
import App from './App'

export function render(url) {
  // const tags = []
  let body = renderToString(() => (
    <Router url={url}>
      <App />
    </Router>
  ))
  // let head = renderToString(Meta)
  // head = head.replace(/\sdata-sm=".+?"/g, '')
  body = body.replace(/\sdata-hk=".+?"/g, '')
  return { body }
}
