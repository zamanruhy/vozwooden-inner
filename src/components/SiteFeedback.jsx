import bgImg from '../images/feedback-bg.png?png'
import Image from './Image'
import SiteButton from './SiteButton'
import SiteCheckbox from './SiteCheckbox'
import SiteInput from './SiteInput'

import './SiteFeedback.css'

export default function SiteFeedback() {
  return (
    <div class="site-feedback">
      <div className="site-feedback__inner">
        <h3 className="site-feedback__title">
          Есть вопрос? <br />
          Напишите нам!
        </h3>
        <form className="site-feedback__form">
          <div className="site-feedback__row site-feedback__row_cols">
            <SiteInput
              type="text"
              variant="ghost"
              required
              name="name"
              placeholder="Ваше имя"
            />
            <SiteInput
              type="text"
              variant="ghost"
              required
              name="phone"
              placeholder="Телефон"
            />
          </div>
          <div className="site-feedback__row">
            <SiteInput
              type="email"
              variant="ghost"
              required
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="site-feedback__row">
            <SiteInput
              variant="ghost"
              required
              name="text"
              placeholder="Текст вопроса"
              textarea
            />
          </div>
          <div className="site-feedback__actions">
            <SiteCheckbox
              variant="ghost"
              name="agree"
              required
              label={
                <>
                  Даю согласие на обработку <br />
                  персональных данных
                </>
              }
            />
            <SiteButton
              type="submit"
              variant="senary"
              size="2xl"
              className="site-feedback__button"
            >
              Отправить
            </SiteButton>
          </div>
        </form>
      </div>
      <Image src={bgImg} alt="" loading="lazy" class="site-feedback__img" />
    </div>
  )
}
