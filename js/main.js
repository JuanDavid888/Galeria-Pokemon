// Doble click para cambiar foto
const namePoke = document.getElementById('namePoke')
const imgPoke = document.getElementById('imgPoke')
const addPoke = document.getElementById('addPoke')

addPoke.addEventListener('click', (e)=>{
    e.preventDefault()
    console.log(namePoke.value);
    
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = `
    <button class="delete">X</button>
    <img class="img" src="${imgPoke.value}" alt="${namePoke.value}">
    <h2 class="name">${namePoke.value}</h2>`
    document.getElementById('list').appendChild(card)
})