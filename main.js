'use strict';

// Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
// Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg

const ourTeam = [
    {
        nome: 'Wayne',
        cognome: 'Barnett',
        ruolo:'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        nome:' Angela',
        cognome: 'Caroll',
        ruolo:'Chief Editor',
        foto:'angela-caroll-chief-editor',
    },
    {
        nome:'Walter',
        cognome: 'Gordon',
        ruolo:'Office Manager',
        foto:'walter-gordon-office-manager.jpg',
    },
    {
        nome:' Angela',
        cognome: 'Lopez',
        ruolo:'Social Media Manager',
        foto:'angela-lopez-social-media-manager.jpg',
    },
    {
        nome:'Scott',
        cognome: 'Estrada',
        ruolo:'Developer',
        foto:'scott-estrada-developer.jpg',
    },
    {
        nome:'Barbara',
        cognome: 'Ramos',
        ruolo:'Graphic Designer',
        foto:'barbara-ramos-graphic-designer.jpg',
    },
];

// for (let i = 0; i < ourTeam.lenght - 1; i ++){
//     console.log(ourTeam[i].nome);
//     console.log(ourTeam[i].cognome);
//     console.log(ourTeam[i].ruolo);
//     console.log(ourTeam[i].foto);
// }

for (let nome in ourTeam){
    console.log(ourTeam[nome]);
}
// for (let cognome in ourTeam){
//     console.log(ourTeam[cognome]);
// }
