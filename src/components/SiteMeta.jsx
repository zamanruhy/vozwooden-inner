import SiteButton from './SiteButton'

import ShareIcon from '../icons/share.svg?component'

import './SiteMeta.css'

export default function SiteMeta() {
  return (
    <div class="site-meta">
      <time class="site-meta__date">23 мая 2023</time>
      <SiteButton as="a" href="news" variant="tab">
        Все новости
      </SiteButton>
      <SiteButton
        type="button"
        variant="pill"
        className="site-meta__share max-md:site-button_icon"
      >
        <ShareIcon />
        <span class="ml-2.5 max-md:hidden">Поделиться</span>
      </SiteButton>
    </div>
  )
}
