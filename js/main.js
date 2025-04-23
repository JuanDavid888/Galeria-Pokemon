const namePoke = document.getElementById('namePoke')
const imgPoke = document.getElementById('imgPoke')
const addPoke = document.getElementById('addPoke')

// Sitio para usar las imagenes de pokémon
let pokemones = 'https://www.pokemon.com/es/pokedex'

function pokemon() {
    if (!namePoke.value || !imgPoke.value) {
        alert("Por favor, completa el nombre y la URL de la imagen");
        return;
    }

    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = `
    <button class="delete">X</button>
    <img class="img" src="${imgPoke.value}" alt="${namePoke.value}">
    <h2 class="name">${namePoke.value}</h2>`
    document.getElementById('list').appendChild(card)

    const changeImg = card.querySelector('img')
    const img = card.querySelector('img')
    changeImg.addEventListener('dblclick', function() {
        let newImg = prompt('Ingrese la nueva URL del pokémon')
        if (!newImg) {
            alert("Por favor, coloca la URL de la imagen");
            return;
        }
        img.src = `${newImg}`
    })

    const removeButton = card.querySelector('.delete');
    removeButton.addEventListener('click', () => {
        card.remove();
    });
}
addPoke.addEventListener('click', pokemon)