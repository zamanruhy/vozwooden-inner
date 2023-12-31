import SiteButton from './SiteButton'
import SiteNewsItem from './SiteNewsItem'

import news1Img from '../images/news-item-1.jpg?jpg'
import news2Img from '../images/news-item-2.jpg?jpg'
import news3Img from '../images/news-item-3.jpg?jpg'
import news4Img from '../images/news-item-4.jpg?jpg'
import news5Img from '../images/news-item-5.jpg?jpg'
import news6Img from '../images/news-item-6.jpg?jpg'

import PrevIcon from '../icons/prev.svg?component'
import NextIcon from '../icons/next.svg?component'

import './SiteRelated.css'

const news = [
  { src: news1Img, href: '#' },
  { src: news5Img, href: '#' },
  { src: news3Img, href: '#' },
  { src: news2Img, href: '#' },
  { src: news4Img, href: '#' },
  { src: news6Img, href: '#' }
]

export default function SiteRelated() {
  return (
    <div class="site-related">
      <h2 className="site-related__title">Статьи по теме</h2>
      <div className="site-related__wrapper">
        <div className="site-related__viewport">
          <div className="site-related__container">
            {news.map(({ src }) => (
              <div className="site-related__slide">
                <SiteNewsItem src={src} />
              </div>
            ))}
          </div>
        </div>
        <div className="site-related__nav">
          <SiteButton
            icon
            type="button"
            variant="quinary"
            size="lg"
            className="site-related__prev"
          >
            <PrevIcon />
          </SiteButton>
          <SiteButton
            icon
            type="button"
            variant="quinary"
            size="lg"
            className="site-related__next"
          >
            <NextIcon />
          </SiteButton>
        </div>
      </div>
    </div>
  )
}
