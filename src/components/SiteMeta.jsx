import SiteButton from './SiteButton'

import ShareIcon from '../icons/share.svg?component'

import './SiteMeta.css'

export default function SiteMeta() {
  return (
    <div class="site-meta">
      <time class="site-meta__date">23 мая 2023</time>
      <SiteButton as="a" href="news" variant="pill">
        Все новости
      </SiteButton>
      <SiteButton variant="pill" type="button" className="site-meta__share">
        <ShareIcon />
        <span>Поделиться</span>
      </SiteButton>
    </div>
  )
}
