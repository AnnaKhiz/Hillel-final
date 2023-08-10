import * as flsFunctions from "./modules/functions.js";
import * as burger from "./modules/burger.js";
import * as contactForm from "./modules/form.js";
import * as swiper from "./modules/swiper.js";
import * as spinner from "./modules/spinner.js";
import * as switcher from "./modules/public-switcher.js";
import * as link from "./modules/header-links.js";
import * as template from "./modules/templates-load.js";


flsFunctions.isWebp();
burger.callBurger();
link.setLinksColor();

if (document.querySelectorAll('[data-link="article"]')) {
    template.loadArticleTemplate();
}
if (document.querySelectorAll('[data-link="content"]')) {
    template.loadServicesTemplate();
}
if (document.querySelectorAll('[data-link="user"]')) {
    template.loadTeamTemplate();
}

if (document.getElementById('contact-form')) {
    contactForm.sendContactForm();
}

if (document.getElementById('swiper-about')) {
    swiper.callSwiperAbout();
}

if (document.getElementById('swiper-index')) {
    swiper.callSwiperIndex();
}

if (document.getElementById('spinner-block')) {
    spinner.runSpinner();
    spinner.setTimeForSpinner();
}

if (document.getElementById('switcher-on-off')) {
    switcher.runSwitcher();
}








