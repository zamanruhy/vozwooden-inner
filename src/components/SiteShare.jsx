import SiteButton from './SiteButton'

import TelegramIcon from '../icons/telegram.svg?component'
import WhatsappIcon from '../icons/whatsapp.svg?component'
import MailIcon from '../icons/mail.svg?component'
import ShareIcon from '../icons/share.svg?component'

import './SiteShare.css'

export default function SiteShare() {
  return (
    <div class="site-share">
      <div className="site-share__items">
        <SiteButton
          icon
          as="a"
          href="https://t.me/share/url?url=https%3A%2F%2Fvozwooden.ru&text=Title"
          target="_blank"
          variant="quinary"
          size="lg"
          className="site-share__item"
          style={{ '--share-color': '#2b78eb' }}
        >
          <TelegramIcon />
        </SiteButton>
        <SiteButton
          icon
          as="a"
          href="https://api.whatsapp.com/send?text=Title"
          target="_blank"
          variant="quinary"
          size="lg"
          className="site-share__item"
          style={{ '--share-color': '#4caf50' }}
        >
          <WhatsappIcon />
        </SiteButton>
        <SiteButton
          icon
          as="a"
          href="mailto:?subject=Title&body=Cсылка"
          target="_blank"
          variant="quinary"
          size="lg"
          className="site-share__item"
          style={{ '--share-color': '#f44336' }}
        >
          <MailIcon />
        </SiteButton>
      </div>
      <div className="site-share__label">Поделиться:</div>
      <div className="site-share__button"></div>

      <SiteButton type="button" variant="pill" className="site-share__button">
        <ShareIcon />
        <span class="ml-2.5">Поделиться</span>
      </SiteButton>
    </div>
  )
}
