import { Route, Routes } from '@solidjs/router'
import News from './pages/News'
import NewsArticle from './pages/NewsArticle'
import About from './pages/About'

export default function App() {
  return (
    <Routes>
      <Route path={'/news'} element={<News />} />
      <Route path={'/news-article'} element={<NewsArticle />} />
      <Route path={'/about'} element={<About />} />
    </Routes>
  )
}
