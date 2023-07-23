import SiteButton from './SiteButton'
import './SiteNavTabs.css'

const tabs = [
  { name: 'Все новости' },
  { name: 'Конкурс' },
  { name: 'Новинка' },
  { name: 'Соревнование' }
]

export default function SiteNavTabs() {
  return (
    <nav class="site-nav-tabs">
      <ul class="site-nav-tabs__list">
        {tabs.map(({ name }, i) => (
          <li className="site-nav-tabs__item">
            <SiteButton
              as="a"
              href="#"
              variant="tab"
              className="site-nav-tabs__tab"
              classList={{ active: i === 2 }}
            >
              {name}
            </SiteButton>
          </li>
        ))}
      </ul>
    </nav>
  )
}
