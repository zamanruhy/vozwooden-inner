import Image from './Image'
import SiteHero from './SiteHero'
import SiteTestimonials from './SiteTestimonials'
import SiteRelated from './SiteRelated'

import heroImg from '../images/news-article-hero.jpg?jpg'
import singleImg from '../images/news-article-single.jpg?jpg'
import oneImg from '../images/news-article-1.jpg?jpg'
import twoImg from '../images/news-article-2.jpg?jpg'
import threeImg from '../images/news-article-3.jpg?jpg'

import './SiteNewsArticle.css'

export default function SiteNewsArticle() {
  return (
    <div class="site-news-article">
      <SiteHero src={heroImg} />
      <div className="site-news-article__content">
        <p>
          12 июня мы чествуем нашу Родину, страну с уникальной историей и
          богатой культурой. Эта официальная торжественная дата уже прочно вошла
          в сердца жителей нашей необъятной страны, несмотря на свою
          новизну.Россия прошла непростой и героический путь становления и
          подъёма, пережила много потрясений, но выстояла и продолжает
          развиваться.
        </p>
        <p>
          Этот праздник – замечательный повод вспомнить о подвигах прошлого и
          задуматься о грядущем. Ведь достойное будущее и процветание страны
          зависят от её граждан, наших совместных усилий и плодотворной работы.
        </p>
        <p>
          Компания от всей души поздравляет всех с Днём России! Желаем вам
          успехов во всех благих начинаниях, настойчивости в достижении целей,
          удачи и оптимизма. Пусть в ваших домах царят любовь и понимание, и
          каждый новый день приносит радость и вдохновение на новые свершения!
        </p>

        <h2>Абзац с текстом и фото</h2>

        <p>
          Банальные, но неопровержимые выводы, а также диаграммы связей
          функционально разнесены на независимые элементы. Как уже неоднократно
          упомянуто, предприниматели в сети интернет формируют глобальную
          экономическую сеть и при этом — объективно рассмотрены
          соответствующими инстанциями.
        </p>
      </div>

      <div className="site-news-article__img-wrap">
        <Image src={singleImg} alt="" loading="lazy" />
      </div>

      <div className="site-news-article__content">
        <h2>Фото</h2>
      </div>

      <div class="site-news-article__gallery">
        <figure class="">
          <div class="" style="display: contents">
            <Image src={oneImg} alt="" loading="lazy" />
          </div>
        </figure>
        <figure class="">
          <div class="" style="display: contents">
            <Image src={twoImg} alt="" loading="lazy" />
          </div>
        </figure>
        <figure class="">
          <div class="" style="display: contents">
            <Image src={threeImg} alt="" loading="lazy" />
          </div>
        </figure>
      </div>

      <div className="site-news-article__content">
        <h2>Прямая речь</h2>
        <p>
          12 июня мы чествуем нашу Родину, страну с уникальной историей и
          богатой культурой. Эта официальная торжественная дата уже прочно вошла
          в сердца жителей нашей необъятной страны, несмотря на свою
          новизну.Россия прошла непростой и героический путь становления и
          подъёма, пережила много потрясений, но выстояла и продолжает
          развиваться
        </p>
      </div>

      <SiteTestimonials />
      <SiteRelated />
    </div>
  )
}
