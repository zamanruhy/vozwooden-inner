import Image from './Image'
import SiteButton from './SiteButton'

import subsImg from '../images/news-subs.jpg?jpg'

import './SiteSubs.css'

export default function SiteSubs() {
  return (
    <div className="site-subs">
      <div className="site-subs__inner">
        <div className="site-subs__caption">
          <h2 className="site-subs__title">
            Подпишись <br />
            будь в курсе новостей!
          </h2>
          <SiteButton
            variant="primary"
            type="button"
            className="site-subs__button"
          >
            Подписаться
          </SiteButton>
        </div>
        <Image src={subsImg} alt="" />
      </div>
    </div>
  )
}
