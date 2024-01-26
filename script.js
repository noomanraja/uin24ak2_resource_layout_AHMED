window.onload = function() {
    let navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Forhindre standard oppførsel av lenken
            e.preventDefault();

            // Fjern 'active' klassen fra den forrige aktive knappen
            document.querySelector('.active').classList.remove('active');

            // Legg til 'active' klassen til den klikkede knappen
            this.classList.add('active');

            // Finn ressursen som samsvarer med teksten på den klikkede knappen
            let resource = resources.find(r => r.category === this.textContent);

            // Oppdater innholdet på siden med informasjonen fra den valgte ressursen
            if (resource) {
                let content = document.querySelector('#content');
                content.innerHTML = `<h1>${resource.category}</h1>
                                    <p>${resource.text}</p>
                                    <ul>${resource.sources.map(source => `<li><a href="${source.url}">${source.title}</a></li>`).join('')}</ul>`;
            }
        });
    });

    // Simuler et klikk på den første .nav-button (HTML-knappen)
    document.querySelector('.nav-button').click();
};
