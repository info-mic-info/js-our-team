// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// Una volta che avete terminato una milestone, fare un push e nel messaggio indicare che avete terminato la milesione numero X.
// BONUS (da fare una volta terminate le singole milestone)
// BONUS 1: Trasformare la stringa foto in una immagine effettiva
// BONUS 2: Organizzare i singoli membri in card/schede


// MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.
let array_team = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        photo: "wayne-barnett-founder-ceo.jpg"

    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        photo: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        photo: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        photo: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        photo: "scott-estrada-developer.jpg"

    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        photo: "barbara-ramos-graphic-designer.jpg"
    }
]
// MILESTONE 1: Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

for (let i = 0; i < array_team.length; i++) {
    for (let key in array_team[i]) {
        console.log(array_team[i][key])
    }

}
// MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe

let contenitore = document.querySelector(`.container`)

let riga

for (let i = 0; i < array_team.length; i++) {
    let image = document.createElement(`img`)
    image.src = `./img/` + array_team[i].photo
    riga = document.createElement(`div`)
    riga.classList.add(`riga`)
    riga.innerHTML = `<p>nome: ${array_team[i].name} Ruolo: ${array_team[i].role}</p>`
    riga.append(image)
    contenitore.append(riga)
    console.log(riga)
}

