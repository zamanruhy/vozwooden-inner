import Image from './Image'
import SiteHero from './SiteHero'

import heroImg from '../images/about-hero.jpg?jpg'
import oneImg from '../images/news-article-1.jpg?jpg'
import twoImg from '../images/news-article-2.jpg?jpg'
import threeImg from '../images/news-article-3.jpg?jpg'
import personImg from '../images/about-person.jpg?jpg'

import './SiteAbout.css'
import SiteButton from './SiteButton'
import SiteFeedback from './SiteFeedback'

export default function SiteAbout() {
  return (
    <div class="site-about">
      <SiteHero
        src={heroImg}
        title="VozWooden"
        text={
          <>
            Популярные игрушки <br />
            из киберспорта
          </>
        }
        variant="featured"
      />
      <div className="site-about__content">
        <h2>О компании</h2>

        <p>
          Таким образом сложившаяся структура организации требуют определения и
          уточнения форм развития. Значимость этих проблем настолько очевидна,
          что постоянное информационно-пропагандистское обеспечение нашей
          деятельности способствует подготовки и реализации позиций, занимаемых
          участниками в отношении поставленных задач. Товарищи! постоянное
          информационно-пропагандистское обеспечение нашей деятельности в
          значительной степени обуславливает создание новых предложений. Равным
          образом консультация с широким активом позволяет выполнять важные
          задания по разработке позиций, занимаемых участниками в отношении
          поставленных задач. Значимость этих проблем настолько очевидна, что
          постоянный количественный рост и сфера нашей активности требуют от нас
          анализа модели развития.
        </p>
      </div>

      <div class="site-about__gallery">
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
      </div>

      <div className="site-about__content">
        <h2>Vozwooden - это</h2>
      </div>

      <div className="site-about__facts">
        <div className="site-about__fact">
          <h3 className="site-about__fact-count">100+</h3>
          <div className="site-about__fact-subj">Штат сотрудников</div>
        </div>
        <div className="site-about__fact">
          <h3 className="site-about__fact-count">250+</h3>
          <div className="site-about__fact-subj">Наименований товара</div>
        </div>
        <div className="site-about__fact">
          <h3 className="site-about__fact-count">7+</h3>
          <div className="site-about__fact-subj">Лет работы</div>
        </div>
      </div>

      <div className="site-about__content">
        <h2>
          Команда <br />
          Vozwooden
        </h2>

        <p>
          Повседневная практика показывает, что высокотехнологичная концепция
          общественного уклада представляет собой интересный эксперимент
          проверки переосмысления внешнеэкономических политик. Принимая во
          внимание показатели успешности, постоянный количественный рост и сфера
          нашей активности не даёт нам иного выбора, кроме определения системы
          обучения кадров, соответствующей насущным потребностям. С учётом
          сложившейся международной обстановки, новая модель организационной
          деятельности играет определяющее значение для системы массового
          участия.
        </p>
      </div>

      <div className="site-about__persons">
        {Array.from({ length: 6 }).map((_) => (
          <div className="site-about__person">
            <Image
              src={personImg}
              alt=""
              loading="lazy"
              class="site-about__person-img"
            />
            <h3 className="site-about__person-name">Александров Юрий</h3>
            <div className="site-about__person-role">Заместитель директора</div>
          </div>
        ))}
      </div>

      <div className="site-about__join">
        <h3 className="site-about__join-title">Стать частью команды</h3>
        <SiteButton
          as="a"
          href="#"
          variant="senary"
          size="2xl"
          className="site-about__join-button"
        >
          Посмотреть вакансии
        </SiteButton>
      </div>

      <SiteFeedback />
    </div>
  )
}
