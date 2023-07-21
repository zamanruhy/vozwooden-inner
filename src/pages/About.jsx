import SiteAbout from '@/components/SiteAbout'

export default function AboutPage() {
  return (
    <>
      <main id="site-content" class="f-col" role="main">
        <section class="shop-s1 f-row">
          <div class="wrapper-size f-col">
            <nav class="woocommerce-breadcrumb">
              <a href="https://vozwooden.ru">Главная</a> ⟶ Дроп "Цифровой Закат"
            </nav>
            <SiteAbout />
          </div>
        </section>
      </main>
    </>
  )
}
