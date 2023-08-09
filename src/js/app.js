import * as flsFunctions from "./modules/functions.js";
import * as burger from "./modules/burger.js";
import * as contactForm from "./modules/form.js";
import * as swiper from "./modules/swiper.js";
import * as spinner from "./modules/spinner.js";
import * as modal from "./modules/modal.js";
import * as switcher from "./modules/public-switcher.js";


flsFunctions.isWebp();
burger.callBurger();

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
if (document.getElementById('callModal')) {
    modal.callModalFeedback();
}

if (document.getElementById('switcher-on-off')) {
    switcher.runSwitcher();
}








