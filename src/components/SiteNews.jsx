import Image from './Image'
import SiteSubs from './SiteSubs'
import SiteButton from './SiteButton'

import news1Img from '../images/news-item-1.jpg?jpg'
import news2Img from '../images/news-item-2.jpg?jpg'
import news3Img from '../images/news-item-3.jpg?jpg'
import news4Img from '../images/news-item-4.jpg?jpg'
import news5Img from '../images/news-item-5.jpg?jpg'
import news6Img from '../images/news-item-6.jpg?jpg'

import NextIcon from '../icons/next.svg?component'

import './SiteNews.css'

const news = [
  { src: news1Img },
  { src: news2Img },
  { src: news3Img },
  { src: news4Img },
  { src: news5Img },
  { src: news6Img }
]

export default function SiteNews() {
  return (
    <div class="site-news">
      <div className="site-news__wrapper">
        <div className="site-news__items">
          {news.map(({ src }) => (
            <div className="site-news__item">
              <div className="site-news__item-details">
                <a href="news-article" className="site-news__item-button">
                  Новость
                </a>
                <div className="site-news__item-caption">
                  <p>
                    Текст новости в одну, две или три строки с кнопкой перехода
                    в полную новость
                  </p>
                  <time>23 мая 2023</time>
                </div>
              </div>
              <Image src={src} alt="#" />
            </div>
          ))}
        </div>
      </div>
      <div className="site-news__pager">
        <SiteButton
          as="a"
          href="#"
          variant="quaternary"
          size="lg"
          className="site-news__more max-md:site-button_md max-md:site-button_septenary"
        >
          Показать еще
        </SiteButton>

        <div className="site-news__pagination max-md:hidden">
          {[1, 2, 3, '->'].map((num) => (
            <SiteButton
              as="a"
              href="#"
              variant="quinary"
              size="lg"
              icon
              className="site-news__pagination-item"
              classList={{ current: num === 1 }}
            >
              {Number.isInteger(num) ? num : <NextIcon />}
            </SiteButton>
          ))}
        </div>
      </div>
      <SiteSubs />
    </div>
  )
}
