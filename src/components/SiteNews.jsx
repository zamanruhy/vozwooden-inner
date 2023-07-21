import Image from './Image'
import SiteSubs from './SiteSubs'
import SiteButton from './SiteButton'

import news1Img from '../images/news-item-1.jpg?jpg'
import news2Img from '../images/news-item-2.jpg?jpg'
import news3Img from '../images/news-item-3.jpg?jpg'
import news4Img from '../images/news-item-4.jpg?jpg'
import news5Img from '../images/news-item-5.jpg?jpg'
import news6Img from '../images/news-item-6.jpg?jpg'

import './SiteNews.css'

const news = [
  { src: news1Img, href: '#' },
  { src: news2Img, href: '#' },
  { src: news3Img, href: '#' },
  { src: news4Img, href: '#' },
  { src: news5Img, href: '#' },
  { src: news6Img, href: '#' }
]

export default function SiteNews() {
  return (
    <div class="site-news">
      <div className="site-news__wrapper">
        <div className="site-news__items">
          {news.map(({ src, href }) => (
            <a href={href} className="site-news__item">
              <Image src={src} alt="#" />
            </a>
          ))}
        </div>
      </div>
      <div className="site-news__pager">
        <SiteButton
          as="a"
          href="#"
          variant="quinary"
          size="lg"
          className="site-news__more"
        >
          Показать еще
        </SiteButton>
      </div>
      <SiteSubs />
    </div>
  )
}
