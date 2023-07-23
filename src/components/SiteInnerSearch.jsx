import SiteButton from './SiteButton'

import MagIcon from '../icons/mag.svg?component'
import CloseIcon from '../icons/close.svg?component'

import './SiteInnerSearch.css'

export default function SiteInnerSearch() {
  return (
    <div className="site-inner-search">
      <form className="site-inner-search__form">
        <input
          className="site-inner-search__input"
          type="text"
          name="q"
          required
          placeholder="Я ищу..."
        />
        <button className="site-inner-search__close" type="button">
          <CloseIcon className="site-inner-search__close-icon" />
        </button>
        <button className="site-inner-search__button" type="submit">
          <MagIcon className="site-inner-search__button-icon" />
        </button>
      </form>
      <SiteButton
        type="button"
        variant="pill"
        icon
        className="site-inner-search__trigger"
      >
        <MagIcon className="site-inner-search__trigger-icon" />
      </SiteButton>
    </div>
  )
}
