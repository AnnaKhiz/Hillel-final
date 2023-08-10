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

    changeColor(services, `http://localhost:5000/services.html`);
    changeColor(about, `http://localhost:5000/about.html`);
    changeColor(team, `http://localhost:5000/team.html`);
    changeColor(team, `http://localhost:5000/team-entry.html`);
    changeColor(publications, `http://localhost:5000/publications.html`);
    changeColor(contact, `http://localhost:5000/contacts.html`);
}