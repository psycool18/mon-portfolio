<script setup>
    import TitreNiveau2 from './TitreNiveau2.vue'

    const parcours = {
        annee1: {
            entreprise: 'Burban PALETTES',
            date: 'Mars 2018 - Mars 2022',
            title: "Responsable d'atelier ",
            comment: "Missions:Gestion des ordres de travaux suivant les commandes, contrôle qualité des palettes réparées, gestion du stock pour livraisons."
        },
        annee2: {
            entreprise: 'Buisard industrie',
            date: 'Avril 2022 - Novembre 2022',
            title: 'Magasinier cariste',
            comment: "Gestion de stock(entrée et sortie), approvisionnement des lignes de productions, mise à jours d'inventaire des stocks."
        },
        annee3: {
            entreprise: 'OCP Répartition',
            date: "Novembre 2022 - Aujourd'hui",
            title: 'Chauffeur livreur',
            comment: "tri des colisa livrer suivant un ordre de tournée donné, chargement et déchargement du camion, livraisons des colis aux clients suivant une feuille de route, contrôle et reception des retours clients."
        },
        
        
    }
</script>

<template>
    <div class="experience">
        <div class="experience__title">
            <span class="material-symbols-outlined">work</span><br>
            <TitreNiveau2>Mes expériences professionnelles</TitreNiveau2>
        </div>
    
        <div class="annee">
            <div class="job" v-for="annee in parcours">
                <h3 class="job__title">{{ annee.entreprise }}</h3>
                <h4 class="job__info">{{ annee.title }} <span class="separation">|</span> {{ annee.date }}</h4>
                <p class="job__comment">{{ annee.comment }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .experience {
        width: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: auto;
    }

    .experience__title {
        text-align: center;
    }

    .material-symbols-outlined {
        font-size: 4em;
    }

    .job__title {
        font-size: 1.25em;
    }

    .job__info {
        font-size: 1.05em;
    }

    .separation {
        font-style: italic;
        color: #A0006D;
    }

    .job__comment {
        text-indent: 2em;
        text-align: justify;
    }

    .annee {
        margin-top: 15px;
        display: flex;
        flex-direction: column-reverse;
        gap: 25px;
    }

    .job {
        padding: 15px;
        background-color: #EFFAFD;
        border-radius: 25px;
        box-shadow: -4px 5px 10px #060640;
    }

    @media screen and (max-width: 480px) {
        .experience {
            width: 85%;
        }
    }
</style>