import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')


const projets = [
    { titre: "Projet 1", description: "Description du projet 1", lien: "https://lienversprojet1.com" },
    { titre: "Projet 2", description: "Description du projet 2", lien: "https://lienversprojet2.com" },
    // Ajoute d'autres projets ici
];

const listeProjets = document.getElementById('liste-projets');

projets.forEach(projet => {
    const div = document.createElement('div');
    div.innerHTML = `<h3>${projet.titre}</h3><p>${projet.description}</p><a href="${projet.lien}" target="_blank">Voir le projet</a>`;
    listeProjets.appendChild(div);
});
window.open('../mon-portfolio/src/components/cv.vue/Mon-CV-main/index.html', '_blank');
