const main = "";
const SiteSubs = "";
const SiteNews = "";
const SiteNavTabs = "";
const SiteInnerSearch = "";
const SiteSummary = "";
const SiteMeta = "";
const SiteHero = "";
const SiteTestimonials = "";
const SiteRelated = "";
const SiteNewsArticle = "";
const SiteAbout = "";
const SiteCheckbox = "";
const SiteInput = "";
const SiteFeedback = "";
(function() {
  var $ = window.jQuery;
  var $search = $(".site-inner-search");
  var $trigger = $(".site-inner-search__trigger", $search);
  var $close = $(".site-inner-search__close", $search);
  var $input = $(".site-inner-search__input", $search);
  $trigger.on("click", function(e) {
    $search.addClass("site-inner-search_open");
    $input.focus();
  });
  $close.on("click", function(e) {
    $search.removeClass("site-inner-search_open");
  });
})();
