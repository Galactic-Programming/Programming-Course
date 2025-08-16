// Fetch = Function used to making HTTP requests to fetch resources from a server
//         (JSON style data, images, etc.)
//         Simplifies asynchronous data fetching in JavaScript and used for interacting with APIs to retrieve and send data.
//         Data asynchronously over the web
//         fetch(url, options)

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Could not fetch data: " + response.statusText);
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

async function fetchData() {
  try {
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    if (!response.ok) {
      throw new Error("Could not fetch data: " + response.statusText);
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");

    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";


  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
