import Image from './Image'

import './SiteNewsItem.css'

export default function SiteNewsItem({ src }) {
  return (
    <div class="site-news-item">
      <div className="site-news-item__details">
        <a href="news-article" className="site-news-item__button">
          Новость
        </a>
        <div className="site-news-item__caption">
          <p>
            Текст новости в одну, две или три строки с кнопкой перехода в полную
            новость
          </p>
          <time>23 мая 2023</time>
        </div>
      </div>
      <Image src={src} alt="#" />
    </div>
  )
}
