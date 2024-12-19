<script setup>
    import TitreNiveau2 from './TitreNiveau2.vue';
    const parcours = {
        annee1: {
            ecole: 'Lycée Charles Cros, Sablé sur sarthe ',
            date: 'Septembre 2004 - Juin 2006',
            title: 'BEP Maintenance des systêmes mécaniques automatisés',
            comment:'Veille au bon déroulement de la maintenance ou des réparations - Monte - Installe, Entretient et contrôle les différents équipements industriels - Répare à distance en cas de télémaintenance -  Veille au bon fonctionnement des machines après intervention -  Fait le lien entre les différents intervenants sur un projet.'
        },
        annee2: {
            ecole: 'AFPA Le Mans',
            date: 'Mai 2011- Septembre 2011',
            title: 'agent de sureté et de sécurtié privée',
            comment: "Assurer une prestation de surveillance humaine dans une démarche d'amélioration continue de la sécurité - Prévenir et réagir face à des problèmes incendie dans des établissements recevant du public et des immeubles de grande hauteur - Réaliser l'ensemble des actions en réponse à une anomalie ou à une alarme."
        },
        annee4: {
            ecole: 'Centre Européen de formation',
            date : "Février 2024 - Aujourd'hui",
            title: 'Titre Professionnel niveau 5 - Développeur web et Web mobile',
            comment: 'Technologies : HTML - CSS - JavaScript - Vue.Js - Git/GitHub - Figma - React.js - Wordpress - Angular - XML / SQL / MySQL - Django - Node.js - PHP - Symfony'
        }
    }
</script>

<template>
    <div class="courses">
        <div class="courses__title">
            <span class="material-symbols-outlined">school</span><br>
            <TitreNiveau2>Mon parcours</TitreNiveau2>
        </div>
    
        <div class="parcours">
            <div class="ecole" v-for="annee in parcours">
                <h3 class="ecole__title">{{ annee.ecole }}</h3>
                <h4 class="ecole__info">{{ annee.title }} <span class="separation">|</span> {{ annee.date }}</h4>
                <p class="ecole__comment">{{ annee.comment }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .courses {
        width: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: auto;
    }

    .courses__title {
        text-align: center;
    }

    .material-symbols-outlined {
        font-size: 4em;
    }

    .ecole__title {
        font-size: 1.25em;
    }

    .ecole__info {
        font-size: 1.05em;
    }

    .separation {
        font-style: italic;
        color: #A0006D;
    }

    .ecole__comment {
        text-indent: 2em;
        text-align: justify;
    }

    .parcours {
        margin-top: 15px;
        display: flex;
        flex-direction: column-reverse;
        gap: 25px;
    }

    .ecole {
        padding: 15px;
        background-color: #EFFAFD;
        border-radius: 25px;
        box-shadow: -4px 5px 10px #060640;
    }

    @media screen and (max-width: 480px) {
        .courses {
            width: 85%;
        }
    }
</style>