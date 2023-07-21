import Image from './Image'

import './SiteHero.css'

export default function SiteHero({ src, variant, title, text }) {
  return (
    <div
      class="site-hero"
      classList={{ [`site-hero_${variant}`]: Boolean(variant) }}
    >
      {title && (
        <div class="site-hero__inner">
          <h1 className="site-hero__title">{title}</h1>
          <p className="site-hero__text">{text}</p>
        </div>
      )}
      <Image src={src} alt="" />
    </div>
  )
}
