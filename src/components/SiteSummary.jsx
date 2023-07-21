import SiteNavTabs from './SiteNavTabs'
import SiteInnerSearch from './SiteInnerSearch'
import './SiteSummary.css'

export default function SiteSummary() {
  return (
    <div class="site-summary">
      <div className="site-summary__inner">
        <SiteNavTabs />
        <SiteInnerSearch />
      </div>
    </div>
  )
}
