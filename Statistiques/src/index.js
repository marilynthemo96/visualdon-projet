import "./statistiques-menages.js"
import "./statistiques-transport.js"
import "./statistiques-sommets.js"
import "./statistiques-population.js"
import "./statistiques-lacs.js"
// import "./statistiques-loyermoyen-canton.js"
import "./statistiques-evolution-importation.js"

import * as d3 from 'd3';
import { json } from 'd3-fetch' // Pour dire qu'on utilise d3



document.querySelector('#btn-transport').addEventListener('click', function (event) {
    console.log("direction transports");

    //on modifie la classe "active" sur la section
    document.querySelector('section.active')?.classList.remove('active')
    document.querySelector('section.stats-transport')?.classList.add('active')

});

document.querySelector('#btn-transport-retour').addEventListener('click', function (event) {
    console.log("retour à la page d'acceuil!");

    //on modifie la classe "active" sur la section
    document.querySelector('section.active')?.classList.remove('active')
    document.querySelector('section.home-section')?.classList.add('active')

});







function toggleSection(section) {
    // Supprime/Ajoute la classe active sur la section
    document.querySelector('section.active')?.classList.remove('active')

}

function toggleNav(section) {
    // Supprime/Ajoute la classe active sur le lien
    document.querySelector('circle a.active')?.classList.remove('active')
    document.querySelector(`circle a[href="${section}"]`)?.classList.add('active')
}

// Affichage d'une section
function displaySection() {
    // S'il n'y a pas de hash (par ex, on est sur "localhost:8080/"), le défaut devient '#home'
    const section = window.location.hash || '#home'
    const sectionSplit = section.split('-')

    // Toggle par défaut des sections et de la navigation
    toggleSection(sectionSplit[0])
    toggleNav(sectionSplit[0])

    // Chargement des éléments custom par section
    switch (sectionSplit[0]) {
        case '#transport':
            // On réutilise la section 'songs' en arrière plan
            toggleSection('#stats-transport')
            render();
            break;

    }
}
