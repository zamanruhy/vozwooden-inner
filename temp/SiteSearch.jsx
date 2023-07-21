import MagIcon from '../icons/mag.svg?component'
import CloseIcon from '../icons/close.svg?component'

import './SiteSearch.css'

export default function SiteSearch() {
  return (
    <form className="site-search">
      <input
        className="site-search__input"
        type="text"
        name="dsfd"
        required
        placeholder="Я ищу..."
      />
      <button className="site-search__close" type="button">
        <CloseIcon className="site-search__close-icon" />
      </button>
      <button className="site-search__button" type="submit">
        <MagIcon className="site-search__button-icon" />
      </button>
    </form>
  )
}
