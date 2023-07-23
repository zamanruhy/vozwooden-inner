import { splitProps, mergeProps } from 'solid-js'
import { Dynamic } from 'solid-js/web'

export default function SiteButton(props) {
  props = mergeProps({ as: 'button' }, props)
  const [, rest] = splitProps(props, [
    'className',
    'classList',
    'as',
    'variant',
    'size',
    'icon',
    'children'
  ])

  return (
    <Dynamic
      component={props.as}
      class="site-button"
      classList={{
        [props.className]: Boolean(props.className),
        [`site-button_${props.variant}`]: Boolean(props.variant),
        [`site-button_${props.size}`]: Boolean(props.size),
        'site-button_icon': Boolean(props.icon),
        ...props.classList
      }}
      {...rest}
    >
      {props.children}
    </Dynamic>
  )
}
