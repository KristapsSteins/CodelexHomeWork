/* eslint-disable no-use-before-define */
const cardContainer = document.querySelector<HTMLDivElement>('#card-container');
const loadMoreButton = document.querySelector('#load-more');
let currentPage = 1;

fetch('https://rickandmortyapi.com/api/character/?page=1')
  .then((response) => response.json())
  .then((data) => makeCards(data.results, cardContainer));

type Characters = [{
    id: string
    name: string
    status: string
    species: string
    image: string
    location: Where
    origin: Origin
}]

type Origin = {
    name: string
    url: string
}

type Where = {
    name: string
    url: string
}

function getStatusDot(status: string) {
  let statusDot;
  switch (status) {
    case 'Alive':
      statusDot = "<span class='card__character__status status--alive'></span>";
      break;
    case 'Dead':
      statusDot = "<span class='card__character__status status--dead'></span>";
      break;
    default:
      statusDot = "<span class='card__character__status status--unknown'></span>";
  }
  return statusDot;
}

function makeCards(charactersArray: Characters, cardContainers: HTMLDivElement) {
  charactersArray.forEach((character) => {
    const statusDot = getStatusDot(character.status);

    const card = document.createElement('div');
    card.id = `character-card-${character.id}`;
    card.classList.add('card__character');

    const link = document.createElement('a');
    link.href = '#';

    const img = document.createElement('img');
    img.src = character.image;
    img.classList.add('card__character__img');
    link.appendChild(img);

    const h2 = document.createElement('h2');
    h2.innerText = character.name;
    link.appendChild(h2);

    const h5 = document.createElement('h5');
    h5.innerHTML = `${statusDot}${character.status} - ${character.species}`;
    link.appendChild(h5);

    const originP = document.createElement('p');
    originP.innerHTML = `<b>Origin:</b> ${character.origin.name}`;
    link.appendChild(originP);

    const locationP = document.createElement('p');
    locationP.innerHTML = `<b>Last known location:</b> ${character.location.name}`;
    link.appendChild(locationP);

    card.appendChild(link);
    cardContainers.appendChild(card);
  });
}
loadMoreButton.addEventListener('click', () => {
  currentPage += 1;
  fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
    .then((response) => response.json())
    .then((data) => makeCards(data.results, cardContainer));
});
