import { E as EmblaCarousel } from "./vendor.js";
const main = "";
const SiteSubs = "";
const SiteNewsItem = "";
const SiteNews = "";
const SiteNavTabs = "";
const SiteInnerSearch = "";
const SiteSummary = "";
const SiteMeta = "";
const SiteHero = "";
const SiteShare = "";
const SiteTestimonials = "";
const SiteRelated = "";
const SiteNewsArticle = "";
const SiteAbout = "";
const SiteCheckbox = "";
const SiteInput = "";
const SiteFeedback = "";
const SiteHistory = "";
const utilities = "";
window.EmblaCarousel = EmblaCarousel;
(function() {
  const $ = window.jQuery;
  const $search = $(".site-inner-search");
  if (!$search.length)
    return;
  const $trigger = $(".site-inner-search__trigger", $search);
  const $close = $(".site-inner-search__close", $search);
  const $input = $(".site-inner-search__input", $search);
  $trigger.on("click", (e) => {
    $search.addClass("site-inner-search_open");
    $input.focus();
  });
  $close.on("click", (e) => {
    $search.removeClass("site-inner-search_open");
  });
})();
(function() {
  const $ = window.jQuery;
  const $shares = $(".site-meta__share, .site-share__button");
  if (!$shares.length)
    return;
  $shares.on("click", async () => {
    try {
      await navigator.share({
        title: document.title,
        text: document.querySelector("meta[name='description']").content,
        url: window.location.href
      });
    } catch (err) {
      console.log(err);
    }
  });
})();
(function() {
  const $ = window.jQuery;
  const $el = $(".site-history");
  if (!$el.length)
    return;
  const $viewport = $(".site-history__viewport", $el);
  const $nav = $(".site-history__nav", $el);
  const $prev = $(".site-history__prev", $el);
  const $next = $(".site-history__next", $el);
  const $navYears = $(".site-history__nav-year", $el);
  const emblaApiMain = EmblaCarousel($viewport[0], { align: "center" });
  const emblaApiNav = EmblaCarousel($nav[0], {
    skipSnaps: true,
    align: "center"
  });
  $next.on("click", emblaApiMain.scrollNext);
  $prev.on("click", emblaApiMain.scrollPrev);
  emblaApiMain.on("select", () => {
    emblaApiNav.scrollTo(emblaApiMain.selectedScrollSnap());
    $prev.prop("disabled", !emblaApiMain.canScrollPrev());
    $next.prop("disabled", !emblaApiMain.canScrollNext());
    $navYears.removeAttr("aria-current").eq(emblaApiMain.selectedScrollSnap()).attr("aria-current", true);
  }).emit("select");
  $navYears.on("click", (e) => {
    emblaApiMain.scrollTo($navYears.index(e.currentTarget));
  });
})();
(function() {
  const $ = window.jQuery;
  const $el = $(".site-testimonials");
  if (!$el.length)
    return;
  const $viewport = $(".site-testimonials__viewport", $el);
  const $prev = $(".site-testimonials__prev", $el);
  const $next = $(".site-testimonials__next", $el);
  const emblaApi = EmblaCarousel($viewport[0], { align: "center" });
  $next.on("click", emblaApi.scrollNext);
  $prev.on("click", emblaApi.scrollPrev);
  emblaApi.on("select", () => {
    $prev.prop("disabled", !emblaApi.canScrollPrev());
    $next.prop("disabled", !emblaApi.canScrollNext());
  }).emit("select");
})();
(function() {
  const $ = window.jQuery;
  const $el = $(".site-related");
  if (!$el.length)
    return;
  const $viewport = $(".site-related__viewport", $el);
  const $prev = $(".site-related__prev", $el);
  const $next = $(".site-related__next", $el);
  const emblaApi = EmblaCarousel($viewport[0], { align: "center" });
  $next.on("click", emblaApi.scrollNext);
  $prev.on("click", emblaApi.scrollPrev);
  emblaApi.on("select", () => {
    $prev.prop("disabled", !emblaApi.canScrollPrev());
    $next.prop("disabled", !emblaApi.canScrollNext());
  }).emit("select");
})();
