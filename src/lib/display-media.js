
import getRandomImage from './nasa-api';

function getNewImage(hdurl) {
  document.querySelector('.apod__image').setAttribute('src', hdurl);
}
function getNewText(explanation) {
  document.querySelector('.apod__text').innerHTML = explanation;
}
function getNewTitle(title) {
  document.querySelector('.apod__title').innerHTML = title;
}

function getNasa() {
  getRandomImage().then((result) => {
    const {
      explanation, title, url,
    } = result;
    document.getElementById('save-image-button').disabled = false;
    getNewImage(url);
    getNewText(explanation);
    getNewTitle(title);
  });
}

if (window.localStorage.getItem('i') == null) {
  window.localStorage.setItem('i', 0);
}
let i = window.localStorage.getItem('i');

function saveCurrentImage() {
  const favoritepic = document.querySelector('.apod__image').src;
  window.localStorage.setItem(`img${i}`, favoritepic);
  const headerfav = document.querySelector('.apod__title').innerHTML;
  window.localStorage.setItem(`title${i}`, headerfav);
  i += 1;
  window.localStorage.setItem('i', i);
  document.getElementById('save-image-button').disabled = true;
}

export default function init() {
  document.getElementById('new-image-button').addEventListener('click', getNasa);
  document.getElementById('save-image-button').addEventListener('click', saveCurrentImage);
  getNasa();
}

export function loadFavourites() {
  let x = 0;
  while (x < ((localStorage.length - 1) / 2)) {
    const div = document.createElement('div');
    const favoritepics = document.createElement('img');
    favoritepics.src = window.localStorage.getItem(`img${x}`);
    const headerfavs = document.createElement('h1');
    headerfavs.innerHTML = window.localStorage.getItem(`title${x}`);
    headerfavs.setAttribute('class', 'apod__title');
    div.appendChild(headerfavs);
    div.appendChild(favoritepics);
    document.querySelector('.apod').appendChild(div);
    x += 1;
  }
}
