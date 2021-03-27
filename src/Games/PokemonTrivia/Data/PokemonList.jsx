let counterTry = 0;

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
    img({
      type: "img",
      img: imgUrl,
    });
    const namepoke = pokemonData.name.replace(/\W/g, " ");

    if (choise) {
      result({ type: "Result", Result: namepoke });
      title({ type: "title", title: "????" });
      const choises = [];
      choises.push(namepoke);
      for (let i = 0; i < 3; i += 1) {
        const number = Math.floor(Math.random() * 900 - 1);
        const url = `https://pokeapi.co/api/v2/pokemon/${number}`;
        const reqPokemon = await fetch(url);
        const pokemonData = await reqPokemon.json();
        const namepoke = pokemonData.name.replace(/\W/g, " ");
        choises.push(namepoke);
      }
      choise({
        type: "buttonMap",
        buttonMap: choises.sort((a, b) => a.localeCompare(b) * -1),
      });
    } else {
      title({ type: "title", title: namepoke });
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
      result({ type: "Result", Result: typeElements });
      typeElements = "";
      for (let i = 0; i < 3; i += 1) {
        const number = Math.floor(Math.random() * 900 - 1);
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
      type({
        type: "buttonMap",
        buttonMap: Object.keys(types),
      });
    }
  } catch (error) {
    counterTry += 1;
    if (counterTry > 5) {
      await getDataPokemon(
        Math.floor(Math.random() * 900 - 1),
        result,
        img,
        title,
        type,
        choise
      );
    } else {
      await getDataPokemon(x, result, img, title, type, choise);
    }
  }
};
const reducer = (state, action) => {
  switch (action.type) {
    case "Increse":
      return {
        ...state,
        counter: parseInt(state.counter) + 1,
      };
    case "Result":
      return {
        ...state,
        Result: action.Result,
      };
    case "flip":
      return {
        ...state,
        flip: action.flip,
      };
    case "img":
      return {
        ...state,
        img: action.img,
      };
    case "title":
      return {
        ...state,
        title: action.title,
      };
    case "buttonMap":
      return {
        ...state,
        buttonMap: action.buttonMap,
      };
    case "question":
      return {
        ...state,
        question: action.question,
      };
    case "winOrLosse":
      return {
        ...state,
        winOrLosse: action.winOrLosse,
      };
    case "coluns":
      return {
        ...state,
        coluns: action.coluns,
      };
    case "Reset":
      return {
        ...state,
        coluns: action.coluns,
        counter: action.counter,
      };

    default:
      break;
  }
};
const initialState = {
  counter: 0,
  Result: " ",
  flip: true,
  img: "",
  title: "",
  buttonMap: [],
  question: "",
  winOrLosse: 0,
  coluns: 2,
};

export { getDataPokemon, reducer, initialState };
