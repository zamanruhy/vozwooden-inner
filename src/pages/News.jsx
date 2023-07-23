import SiteButton from '@/components/SiteButton'
import SiteNews from '@/components/SiteNews'
import SiteSummary from '@/components/SiteSummary'
import EmailIcon from '@/icons/email.svg?component'

export default function NewsPage() {
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
                Новости VozWooden
              </h1>
              <SiteButton
                type="button"
                variant="quaternary"
                size="xl"
                className="max-md:site-button_md"
              >
                <EmailIcon class="mr-2.5 max-md:hidden" />
                Подпишись
              </SiteButton>
            </div>
            <SiteSummary />
            <SiteNews />
          </div>
        </section>
      </main>
    </>
  )
}
