import { splitProps } from 'solid-js'

import './SiteCheckbox.css'

export default function SiteCheckbox(props) {
  const [, rest] = splitProps(props, ['class', 'variant', 'style', 'label'])

  return (
    <label
      class="site-checkbox"
      classList={{
        [props.class]: Boolean(props.class),
        [`site-checkbox_${props.variant}`]: Boolean(props.variant)
      }}
      style={props.style}
    >
      <input type="checkbox" class="site-checkbox__input" {...rest} />
      <span class="site-checkbox__box" aria-hidden="true">
        <svg viewBox="0 0 16 16">
          <path d="M6 13 1 8l1.41-1.41L6 10.17l7.59-7.59L15 4Z" />
        </svg>
      </span>
      {props.label && <span class="site-checkbox__label">{props.label}</span>}
    </label>
  )
}
