// Doble click para cambiar foto
const namePoke = document.getElementById('namePoke')
const imgPoke = document.getElementById('imgPoke')
const addPoke = document.getElementById('addPoke')

function pokemon() {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = `
    <button id="remove" class="delete">X</button>
    <img class="img" src="${imgPoke.value}" alt="${namePoke.value}">
    <h2 class="name">${namePoke.value}</h2>`
    document.getElementById('list').appendChild(card)

    const changeImg = card.querySelector('img')
    const img = card.querySelector('img')
    changeImg.addEventListener('dblclick', function() {
        let newImg = prompt('Ingrese la nueva URL del pokémon')
        img.src = `${newImg}`
    })

    const removeButton = card.querySelector('.delete');
    removeButton.addEventListener('click', ()=>{
        document.getElementById('list').removeChild(card)
    });
}
addPoke.addEventListener('click', pokemon)