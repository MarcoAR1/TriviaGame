const getDataPokemon = async (x, result, img, title, type, choise) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${x}`;
    const reqPokemon = await fetch(url);
    const pokemonData = await reqPokemon.json();
    const imgUrl = pokemonData["sprites"]["other"]["official-artwork"][
      "front_default"
    ]
      ? pokemonData["sprites"]["other"]["official-artwork"]["front_default"]
      : pokemonData["sprites"]["other"]["dream_world"]["front_default"];
    img(imgUrl);
    const namepoke = pokemonData.name.replace(/\W/g, " ");

    if (choise) {
      result(namepoke);
      title("????");
      const choises = [];
      choises.push(namepoke);
      for (let i = 0; i < 3; i += 1) {
        const number = Math.floor(Math.random() * 989 - 1);
        const url = `https://pokeapi.co/api/v2/pokemon/${number}`;
        const reqPokemon = await fetch(url);
        const pokemonData = await reqPokemon.json();
        const namepoke = pokemonData.name.replace(/\W/g, " ");
        choises.push(namepoke);
      }
      choise(choises.sort((a, b) => a.localeCompare(b) * -1));
    } else {
      title(namepoke);
      const types = {};
      const poketypes = pokemonData.types;
      let typeElements = "";
      for (let x in poketypes) {
        if (poketypes[x]) {
          const CurrenTypes = poketypes[x];
          typeElements = typeElements + " " + CurrenTypes.type.name;
        }
      }
      types[typeElements] = typeElements;
      result(typeElements);
      typeElements = "";
      for (let i = 0; i < 3; i += 1) {
        const number = Math.floor(Math.random() * 989 - 1);
        const url = `https://pokeapi.co/api/v2/pokemon/${number}`;
        const reqPokemon = await fetch(url);
        const pokemonData = await reqPokemon.json();
        const poketypes = pokemonData.types;
        for (let x in poketypes) {
          if (poketypes[x]) {
            const CurrenTypes = poketypes[x];
            typeElements = typeElements + " " + CurrenTypes.type.name;
          }
        }
        if (types[typeElements]) {
          i -= 1;
        } else {
          types[typeElements] = typeElements;
          typeElements = "";
        }
      }
      type(Object.keys(types));
    }
  } catch (error) {
    getDataPokemon(x, result, img, title, type, choise);
  }
};

export { getDataPokemon };
