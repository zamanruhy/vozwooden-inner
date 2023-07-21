import SiteMeta from '@/components/SiteMeta'
import SiteNewsArticle from '@/components/SiteNewsArticle'
import SiteSubs from '@/components/SiteSubs'

export default function NewsArticlePage() {
  return (
    <>
      <main id="site-content" class="f-col" role="main">
        <section class="shop-s1 f-row">
          <div class="wrapper-size f-col">
            <nav class="woocommerce-breadcrumb">
              <a href="https://vozwooden.ru">Главная</a> ⟶ Дроп "Цифровой Закат"
            </nav>
            <div class="woocommerce-products-header">
              <h1 class="woocommerce-products-header__title page-title">
                Лето вместе с VozWooden
              </h1>
            </div>
            <SiteMeta />
            <SiteNewsArticle />
          </div>
        </section>
      </main>
      <SiteSubs />
    </>
  )
}
