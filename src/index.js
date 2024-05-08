function getCharacters(done) {
  const result = fetch("https://rickandmortyapi.com/api/character");

  result
    .then((response) => response.json())
    .then((data) => {
      done(data);
    });
}

getCharacters((data) => {
  data.results.forEach((personaje) => {
    const article = document.createElement('article');
    article.innerHTML = `
      <div class="image-container">
        <img alt="Personaje" />
      </div>
      <h2>${personaje.name}</h2>
      <span>${personaje.status}</span>
    `;
    
    const img = article.querySelector('img');
    img.src = personaje.image;

    const main = document.querySelector("main");
    main.append(article);
  });
});
