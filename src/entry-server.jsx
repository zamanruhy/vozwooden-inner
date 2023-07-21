import { renderToString } from 'solid-js/web'
import { Router } from '@solidjs/router'
import App from './App'

export function render(url) {
  // const tags = []
  const body = renderToString(() => (
    <Router url={url}>
      <App />
    </Router>
  ))
  return { body }
}
