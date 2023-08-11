export function loadArticleTemplate() {
    document.addEventListener('click', (e) => {
        if (e.target.dataset.link === 'article') {
            if (location.href === 'https://anna-khizhniak.site/portfolio/final-hillel/publications.html') {
                const pubBlock = document.getElementById('publications-template-block');
                const templateArticle = document.getElementById('template-article');
                pubBlock.innerHTML = templateArticle.innerHTML;
            } else {
                let elemBlueArray = [...document.getElementsByClassName('blue')];
                elemBlueArray.forEach((element) => {
                    element.classList.remove('blue');
                    element.classList.add('white');
                })
                // const curBlock = document.getElementById('services-template-block');
                const curBlock = document.querySelector('[data-block="template"]');
                curBlock.style.background = 'white';
                const tArticle = document.getElementById('template-article');
                curBlock.innerHTML = tArticle.innerHTML;

                const headerLogoBlock = document.getElementById('header-logo');
                const templateLogoFragment = document.getElementById('template-logo-fragment');
                headerLogoBlock.innerHTML = templateLogoFragment.innerHTML;

                const services = document.getElementById('services');
                const publications = document.getElementById('publications');

                function changeColor(button, location, color, border, padding) {
                    if (window.location.href === location) {
                        button.firstChild.style.color = color;
                        button.firstChild.style.borderBottom = border;
                        button.firstChild.style.paddingBottom = padding;
                    }
                }
                changeColor(publications, 'https://anna-khizhniak.site/portfolio/final-hillel/services.html#','#f0145a','2px solid #f0145a', '3px' );
                changeColor(services, 'https://anna-khizhniak.site/portfolio/final-hillel/services.html#','#24a3ff', 'none', 'none' );
            }

        }
    })
}

export function loadServicesTemplate() {
    document.addEventListener('click', (e) => {
        if (e.target.dataset.link === 'content') {
            if (document.getElementById('index-block')) {
                const indexBlock = document.getElementById('index-block');
                const templateSer = document.getElementById('template-services');
                indexBlock.innerHTML = templateSer.innerHTML;
                callModalWindow();
            } else {
                const servBlock = document.getElementById('services-template-block');
                const templateServices = document.getElementById('template-services');
                servBlock.innerHTML = templateServices.innerHTML;
                callModalWindow();

            }

            function callModalWindow() {
                const callModal = document.getElementById('callModal');
                const closeModal = document.getElementById('closeModal');
                const modalWindow = document.getElementById('modal');

                callModal.addEventListener('click', (e) => {
                    e.preventDefault();
                    modalWindow.classList.toggle('show');
                })

                closeModal.addEventListener('click', (e) => {
                    e.preventDefault();
                    modalWindow.classList.toggle('show');
                })
            }

        }
    })

}

export function loadTeamTemplate() {
    document.addEventListener('click', (e) => {
        if (e.target.dataset.link === 'user') {
            const userBlock = document.getElementById('template-team-block');
            const templateTeam = document.getElementById('template-team');
            userBlock.innerHTML = templateTeam.innerHTML;

        }
    })

}