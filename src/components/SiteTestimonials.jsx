import SiteShare from './SiteShare'
import SiteButton from './SiteButton'

import PrevIcon from '../icons/prev.svg?component'
import NextIcon from '../icons/next.svg?component'

import './SiteTestimonials.css'

export default function SiteTestimonials() {
  return (
    <div class="site-testimonials">
      <div className="site-testimonials__body">
        <div className="site-testimonials__viewport">
          <div className="site-testimonials__container">
            {Array.from({ length: 3 }).map((_) => (
              <div className="site-testimonials__item">
                <div className="site-testimonials__item-head">
                  <img
                    src="https://images.unsplash.com/photo-1590031905406-f18a426d772d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=300&h=300&q=80"
                    alt=""
                    class="site-testimonials__item-ava"
                  />
                  <div className="site-testimonials__item-caption">
                    <h3 className="site-testimonials__item-name">
                      Иванов Иван Иванович
                    </h3>
                    <div className="site-testimonials__item-role">
                      Руководитель организации
                    </div>
                  </div>
                </div>
                <div className="site-testimonials__item-text">
                  Банальные, но неопровержимые выводы, а также диаграммы связей
                  функционально разнесены на независимые элементы. Как уже
                  неоднократно упомянуто, предприниматели в сети интернет
                  формируют глобальную экономическую сеть и при этом —
                  объективно рассмотрены соответствующими инстанциями.
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="site-testimonials__actions">
        <SiteShare />

        <div className="site-testimonials__nav">
          <div className="site-testimonials__nav-left">
            <SiteButton
              icon
              type="button"
              variant="quinary"
              size="lg"
              className="site-testimonials__prev"
            >
              <PrevIcon />
            </SiteButton>
            <span>Предыдущая</span>
          </div>
          <div className="site-testimonials__nav-right">
            <span>Следующая</span>
            <SiteButton
              icon
              type="button"
              variant="quinary"
              size="lg"
              className="site-testimonials__next"
            >
              <NextIcon />
            </SiteButton>
          </div>
        </div>
      </div>
    </div>
  )
}
