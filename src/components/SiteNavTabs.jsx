import './SiteNavTabs.css'

const tabs = [
  { name: 'Все новости', active: true },
  { name: 'Конкурс', active: false },
  { name: 'Новинка', active: false },
  { name: 'Соревнование', active: false }
]

export default function SiteNavTabs() {
  return (
    <nav class="site-nav-tabs">
      <ul>
        {tabs.map(({ name, active }) => (
          <li>
            <a href="#" classList={{ active: active }}>
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
