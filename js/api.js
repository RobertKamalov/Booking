const AUTOR_COUNT = 10;

const autors = fetch('https://23.javascript.pages.academy/keksobooking/data')
  .then((response) => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error('Что-то пошло не так');
    }
  })
  .then((json) => {
    return json.slice(0, AUTOR_COUNT)
  })
  .catch((err) => {
    console.error(err)
  })

console.log(autors);

autors.forEach(element => {
  console.log(element);
});
