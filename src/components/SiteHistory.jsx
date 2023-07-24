import Image from './Image'
import SiteButton from './SiteButton'

import slideImg from '../images/history-slide.jpg?jpg'

import PrevIcon from '../icons/prev.svg?component'
import NextIcon from '../icons/next.svg?component'

import './SiteHistory.css'

const length = 10

export default function SiteHistory() {
  return (
    <div class="site-history">
      <div className="site-container">
        <div className="site-history__head">
          <SiteButton
            icon
            type="button"
            variant="ghost"
            size="lg"
            className="site-history__prev"
          >
            <PrevIcon />
          </SiteButton>
          <div className="site-history__nav">
            <div className="site-history__nav-container">
              {Array.from({ length }).map((_, i) => (
                <div class="site-history__nav-year">{2015 + i}</div>
              ))}
            </div>
          </div>
          <SiteButton
            icon
            type="button"
            variant="ghost"
            size="lg"
            className="site-history__next"
          >
            <NextIcon />
          </SiteButton>
        </div>
        <div className="site-history__viewport">
          <div className="site-history__container">
            {Array.from({ length }).map((_, i) => (
              <div className="site-history__slide">
                <div className="site-history__slide-pic">
                  <Image
                    src={slideImg}
                    alt=""
                    loading="lazy"
                    class="site-history__slide-img"
                  />
                  <div className="site-history__slide-year">{2015 + i}</div>
                </div>
                <div className="site-history__slide-text">
                  Повседневная практика показывает, что высокотехнологичная
                  концепция общественного уклада представляет собой интересный
                  эксперимент проверки переосмысления внешнеэкономических
                  политик.
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
