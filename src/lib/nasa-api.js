
/**
 * Sækir Myndir frá nasa API. Til þess að sjá dæmi um json svari sjá apod.json
 */

const API_KEY = 'Sy5qLId86vE1OYWYNuDo5JChfBrdAvsBFDQyytrG';
const URL = 'https://api.nasa.gov/planetary/apod';


function randomdate() {
  const d = new Date();
  const dd = d.getDate();
  const mm = d.getMonth();
  const yyyy = d.getFullYear();
  const ceiling = new Date(yyyy, mm, dd);
  const floor = new Date(1995, 0o5, 16);
  const rnddate = new Date(+floor + Math.random() * (+ceiling - +floor));
  const month = rnddate.getMonth() + 1;

  return `${rnddate.getFullYear()}-${month}-${rnddate.getDate()}`;
}


/**
 * Sækir mynd af handahófi frá APOD API hjá nasa
 *
 * @returns {Promise} sem mun innihalda upplýsingar um mynd/myndband hjá nasa.
 */
export default async function getRandomImage() {
  const API_URL = `${URL}?api_key=${API_KEY}&date=${randomdate()}`;
  const data = await fetch(API_URL);
  return data.json();
}
