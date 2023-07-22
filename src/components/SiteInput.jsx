import { splitProps } from 'solid-js'

import './SiteInput.css'

export default function SiteInput(props) {
  const [, rest] = splitProps(props, ['class', 'variant', 'textarea'])

  return (
    <>
      {!props.textarea ? (
        <input
          class="site-input"
          classList={{
            [props.class]: Boolean(props.class),
            [`site-input_${props.variant}`]: Boolean(props.variant)
          }}
          type="text"
          {...rest}
        />
      ) : (
        <textarea
          class="site-input"
          classList={{
            [props.class]: Boolean(props.class),
            [`site-input_${props.variant}`]: Boolean(props.variant)
          }}
          {...rest}
        />
      )}
    </>
  )
}
