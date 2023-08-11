export function setLinksColor () {
    const about = document.getElementById('about');
    const services = document.getElementById('services');
    const team = document.getElementById('team');
    const publications = document.getElementById('publications');
    const contact = document.getElementById('contact');

    function openPage(button, location) {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.replace(location)
        })
    }
    openPage(about, 'about.html');
    openPage(services, 'services.html');
    openPage(team, 'team.html');
    openPage(publications, 'publications.html');
    openPage(contact, 'contacts.html');

    function changeColor(button, location) {
        if (window.location.href === location) {
            button.firstChild.style.color = '#f0145a';
            button.firstChild.style.borderBottom = '2px solid #f0145a';
            button.firstChild.style.paddingBottom = '3px';
        }
    }

    changeColor(services, `https://anna-khizhniak.site/portfolio/final-hillel/services.html`);
    changeColor(about, `https://anna-khizhniak.site/portfolio/final-hillel/about.html`);
    changeColor(team, `https://anna-khizhniak.site/portfolio/final-hillel/team.html`);
    changeColor(team, `https://anna-khizhniak.site/portfolio/final-hillel/team-entry.html`);
    changeColor(publications, `https://anna-khizhniak.site/portfolio/final-hillel/publications.html`);
    changeColor(contact, `https://anna-khizhniak.site/portfolio/final-hillel/contacts.html`);
}